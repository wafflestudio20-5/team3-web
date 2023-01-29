import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import { toast } from 'react-toastify';
import axios from 'axios';

import Dialog from '../components/dialog';
import Spinner from '../../../components/spinner';

import { redirectWithMsg } from '../../../utils/errors';
import { getChats } from '../../../store/slices/chatSlice';
import { ChatMessageType, SubBodyType } from '../../../types/chat';
import { getTradePost } from '../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const ChatContainer = () => {
  const navigate = useNavigate();
  const roomUUID = useParams().UUID;
  const uid = Number(useParams().uid);
  const postId = Number(useParams().pid);

  const { me } = useAppSelector(state => state.users);
  const { you } = useAppSelector(state => state.chat);
  const { accessToken } = useAppSelector(state => state.session);

  // TODO: client 타입 정보
  const client = useRef<any>({});
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<any>(null);
  const [message, setMessage] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

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

  useEffect(() => {
    if (accessToken && postId) {
      dispatch(getTradePost({ accessToken, postId }))
        .unwrap()
        .then(res => {
          setProduct(res);
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
  }, [accessToken, postId]);

  const connect = () => {
    // DESC: client 객체 만들기
    client.current = new Client({
      brokerURL: 'ws://3.37.61.115/ws-stomp',
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
      // if (id) get .then(() setChatMessages...)
      setChatMessages([
        ...chatMessages,
        {
          message: bodyObj.message,
          senderId: bodyObj.senderId,
          createdAt: bodyObj.createdAt,
        },
      ]);
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
    />
  );
};

export default ChatContainer;
