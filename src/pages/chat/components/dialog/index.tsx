import { useRef, useCallback, useEffect } from 'react';
import Moment from 'react-moment';

import { User } from '../../../../types/users';
import { ChatMessageType } from '../../../../types/chat';

import * as S from './dialog.styled';

interface DialogProps {
  to: User;
  from: User;
  product: any; // TODO: 상품정보, 수정
  message: string;
  publish: (msg: string) => void;
  setMessage: (msg: string) => void;
  chatMessages: ChatMessageType[];
}

const Dialog = ({
  to,
  from,
  product,
  message,
  publish,
  setMessage,
  chatMessages,
}: DialogProps) => {
  const scrollRef = useRef<null | HTMLUListElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [publish]);

  useEffect(() => {
    scrollToBottom();
  }, [publish]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.ProfileImg src={to?.imgUrl || undefined} alt="profile" />
        <S.Username>{to?.username}</S.Username>
        <S.Temperature>{`${to?.temperature}°C`}</S.Temperature>
      </S.Header>

      <S.Product>-----상품 들어갈 부분-----</S.Product>

      <S.MessageWrapper ref={scrollRef}>
        {chatMessages && chatMessages.length > 0 && (
          <>
            <S.ChatAccounce>{`🥕 ${to?.username}님과의 대화를 시작해보세요.`}</S.ChatAccounce>

            {chatMessages.map((_chatMessage: ChatMessageType, idx: number) => (
              // TODO: 키값 unique 값으로 대체 (삭제 로직 없어서 일단 키값)
              <S.Li key={idx}>
                {_chatMessage.senderId === from?.id ? (
                  <S.FromMessageContainer>
                    <S.MessageDate>
                      <Moment format="hh:mm">{_chatMessage.createdAt}</Moment>
                    </S.MessageDate>
                    <S.FromMessageBox>{_chatMessage.message}</S.FromMessageBox>
                  </S.FromMessageContainer>
                ) : (
                  <S.ToMessageContainer>
                    <S.ToMessageProfile
                      alt="profile"
                      src={to?.imgUrl || undefined}
                    />
                    <S.ToMessageBox>{_chatMessage.message}</S.ToMessageBox>
                    <S.MessageDate>
                      <Moment format="hh:mm">{_chatMessage.createdAt}</Moment>
                    </S.MessageDate>
                  </S.ToMessageContainer>
                )}
              </S.Li>
            ))}
          </>
        )}
      </S.MessageWrapper>

      <S.TextareaWrapper>
        <S.Textarea
          wrap="hard"
          value={message}
          placeholder={'메시지를 입력해주세요.'}
          onKeyUp={e => e.key === 'Enter' && publish(message)}
          onChange={e => setMessage(e.target.value.replace(/(\n|\r\n)/g, ''))}
        />
        <S.ButtonWrapper>
          <S.TextLimit length={message.length}>{message.length}</S.TextLimit>
          <S.TextLimit length={255}>/255</S.TextLimit>
          <S.Button
            message={message}
            bgColor={'#ff6f0f'}
            length={message.length}
            onClick={() => publish(message)}
            disabled={message ? false : true}
          >
            전송
          </S.Button>
        </S.ButtonWrapper>
      </S.TextareaWrapper>
    </S.Wrapper>
  );
};

export default Dialog;
