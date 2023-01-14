import { useEffect, useRef, useState } from 'react';
import { Client } from '@stomp/stompjs';

import Dialog from '../components/dialog';
import { ChatMessageType, SubBodyType } from '../../../types/chat';

const ChatContainer = () => {
  // TODO: client 타입 정보
  const client = useRef<any>({});
  const [message, setMessage] = useState<string>('');
  const [senderId, setSenderId] = useState<number>(1); // props로 가져오기
  const [roomUUID, setRoomUUID] = useState<string>('abcd'); // props로 가져오기
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [chatMessages]);

  const connect = () => {
    // DESC: client 객체 만들기
    client.current = new Client({
      brokerURL: 'ws://localhost:8080/ws-stomp',
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
        senderId,
        createdAt: new Date(curr.getTime() + KR_TIME_DIFF),
      }),
    });
    setMessage('');
  };

  return (
    <Dialog
      to={{
        id: 2,
        username: 'fluentmin',
        email: 'lerrybe@snu.ac.kr',
        location: '서울 관악구 봉천동',
        temperature: 40.8,
        imgUrl: 'https://avatars.githubusercontent.com/u/91964707?v=4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
      from={{
        id: 1,
        username: 'roddywhite',
        email: 'roddywhite@snu.ac.kr',
        location: '서울 관악구 봉천동',
        temperature: 37.5,
        imgUrl: 'https://avatars.githubusercontent.com/u/109863663?v=4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }}
      product={null}
      message={message}
      publish={publish}
      setMessage={setMessage}
      chatMessages={chatMessages}
    />
  );
};

export default ChatContainer;
