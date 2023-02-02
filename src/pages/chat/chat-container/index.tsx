import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import { toast } from 'react-toastify';
import axios from 'axios';

import Dialog from '../components/dialog';
import Spinner from '../../../components/spinner';

import { BASE_URL } from '../../../constant';
import { loadItem } from '../../../utils/storage';
import { redirectWithMsg } from '../../../utils/errors';
import { getChats } from '../../../store/slices/chatSlice';
import { ChatMessageType, SubBodyType } from '../../../types/chat';
import {
  getTradePost,
  postReservation,
  postConfirmation,
} from '../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { BuySellType, ReviewHistory } from '../../../types/review';

const ChatContainer = () => {
  const navigate = useNavigate();
  const roomUUID = useParams().UUID;
  const uid = Number(useParams().uid);
  const postId = Number(useParams().pid);

  const { me } = useAppSelector(state => state.users);
  const { you } = useAppSelector(state => state.chat);
  const accessToken = loadItem('accessToken');

  // TODO: client 타입 정보
  const client = useRef<any>({});
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<any>(null);
  const [message, setMessage] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [meSeller, setMeSeller] = useState(false);
  const [youBuyer, setYouBuyer] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);

  // DESC: 리뷰 달렸는지 확인 (버튼 생성용)
  const checkIsReviewed = (
    reviews: ReviewHistory[],
    buySellType: BuySellType,
  ) => {
    if (reviews[0]) {
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].type === buySellType) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [chatMessages]);

  useEffect(() => {
    if (roomUUID && uid && accessToken) {
      dispatch(getChats({ accessToken, isBuyer: true, roomUUID, uid }))
        .unwrap()
        .then(res => {
          setChatMessages(res.chatHistories);
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else if (err.response?.status === 400) {
              toast.error(err.response?.data.error);
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  }, []);

  const getPost = () => {
    if (accessToken && postId) {
      dispatch(getTradePost({ accessToken, postId }))
        .unwrap()
        .then(res => {
          setProduct(res);
          if (res?.seller.id === me?.id) {
            setMeSeller(true);
            if (checkIsReviewed(res?.reviews, BuySellType.SELLER)) {
              setIsReviewed(true);
            } else {
              setIsReviewed(false);
            }
          } else {
            setMeSeller(false);
            if (checkIsReviewed(res?.reviews, BuySellType.BUYER)) {
              setIsReviewed(true);
            } else {
              setIsReviewed(false);
            }
          }
          if ((res?.buyer as any).id === you?.id) {
            setYouBuyer(true);
          } else {
            setYouBuyer(false);
          }
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };
  useEffect(() => {
    getPost();
  }, [accessToken, postId, you]);

  const connect = () => {
    // DESC: client 객체 만들기
    client.current = new Client({
      brokerURL: 'wss://api.waffle-market.store/ws-stomp',
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000, // DESC: 자동 재연결하는 딜레이
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: () => {
        subscribe();
      },
      onStompError: frame => {
        console.error(frame);
      },
    });
    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  // DESC: 메시지 받는 길 열어둠 (subscribe)
  const subscribe = () => {
    client.current.subscribe(`/sub/room/${roomUUID}`, ({ body }: any) => {
      const bodyObj: SubBodyType = JSON.parse(body);
      axios
        .get(`${BASE_URL}/chat/${bodyObj.chatId}`)
        .then(() => {
          setChatMessages([
            ...chatMessages,
            {
              message: bodyObj.message,
              senderId: bodyObj.senderId,
              createdAt: bodyObj.createdAt,
              chatId: bodyObj.chatId,
            },
          ]);
        })
        .catch(err => {
          console.log('err', err);
        });
    });
  };

  // DESC: 메시지 보냄 (publish)
  const publish = (message: string) => {
    if (!client.current.connected) return;
    if (!message.trim()) return;
    if (message.length > 255) return;
    const curr = new Date();
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

    client.current.publish({
      destination: '/pub/message',
      body: JSON.stringify({
        roomUUID,
        message,
        senderId: me?.id,
        createdAt: new Date(curr.getTime() + KR_TIME_DIFF),
      }),
    });
    setMessage('');
  };

  // DESC: seller 입장, 예약자 선정
  const handleSetReservation = () => {
    if (accessToken && product) {
      dispatch(
        postReservation({
          accessToken,
          postId: postId,
          userId: you?.id,
        }),
      )
        .unwrap()
        .then(res => {
          toast('예약중으로 변경되었습니다');
          getPost();
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              toast(err.response.data.message);
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };

  // DESC: seller 입장, 거래 확정
  const handleTradeConfirmation = () => {
    if (accessToken && postId) {
      dispatch(postConfirmation({ accessToken: accessToken, postId: postId }))
        .unwrap()
        .then(() => {
          toast('판매 완료로 변경되었습니다');
          publish(
            '🍀 [알림] 거래가 완료되었습니다.🍀\n거래가 어땠는지 후기를 남겨주세요!',
          );
          getPost();
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              toast(err.response.data.message);
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else if (err.response?.status === 400) {
              toast.error(err.response?.data.error);
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };

  if (!roomUUID || !uid || !me) {
    return <Spinner />;
  }

  return (
    <Dialog
      to={you}
      from={me}
      product={product}
      message={message}
      publish={publish}
      setMessage={setMessage}
      chatMessages={chatMessages}
      postId={postId}
      meSeller={meSeller}
      youBuyer={youBuyer}
      isReviewed={isReviewed}
      handleSetReservation={handleSetReservation}
      handleTradeConfirmation={handleTradeConfirmation}
    />
  );
};

export default ChatContainer;
