import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

import { ChatMessageType } from '../../../../types/chat';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import { BuySellType, ReviewHistory } from '../../../../types/review';
import { TradeStatusType } from '../../../../types/tradePost';
import ReviewCheckModal from '../../../../components/review-check-modal';

import * as S from './dialog.styled';
import defaultImg from '../../../../assets/default-profile.png';
import defaultProduct from '../../../../assets/default-product.svg';

interface DialogProps {
  to: any;
  from: any;
  product: any;
  message: string;
  publish: (msg: string) => void;
  setMessage: (msg: string) => void;
  chatMessages: ChatMessageType[];
  postId: number;
  meSeller: boolean;
  youBuyer: boolean;
  isReviewed: boolean;
  handleSetReservation: () => void;
  handleTradeConfirmation: () => void;
}

const Dialog = ({
  to,
  from,
  product,
  message,
  publish,
  setMessage,
  chatMessages,
  postId,
  meSeller,
  youBuyer,
  isReviewed,
  handleSetReservation,
  handleTradeConfirmation,
}: DialogProps) => {
  const navigate = useNavigate();
  const scrollRef = useRef<null | HTMLUListElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToBottom = useCallback(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [publish]);

  useEffect(() => {
    scrollToBottom();
  }, [publish]);

  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <S.Header onClick={() => navigate(`/profile/${to?.id}`)}>
          <S.ProfileImg src={to?.imgUrl || defaultImg} alt="profile" />
          <S.Username>{to?.username}</S.Username>
          <S.Temperature>{`${to?.temperature}°C`}</S.Temperature>
        </S.Header>

        <S.Product>
          <S.ProductInfoWrapper>
            <S.ProductImg
              src={
                product?.imageUrls && product?.imageUrls.length > 0
                  ? product?.imageUrls[0]
                  : defaultProduct
              }
            />
            <S.ProductInfo
              onClick={() => navigate(`/tradepost/${product.postId}`)}
            >
              <S.ProductTitle>{product?.title}</S.ProductTitle>
              <S.ProductPrice>
                {toStringNumWithComma(product?.price)}원
              </S.ProductPrice>
            </S.ProductInfo>
          </S.ProductInfoWrapper>

          {meSeller && product?.tradeStatus === TradeStatusType.TRADING && (
            <S.TradeButtonM onClick={handleSetReservation}>
              예약하기
            </S.TradeButtonM>
          )}
          {meSeller &&
            product?.tradeStatus === TradeStatusType.RESERVATION &&
            product?.buyer.id === to.id && (
              <S.TradeButtonL onClick={handleSetReservation}>
                예약자 변경하기
              </S.TradeButtonL>
            )}
          {meSeller &&
            youBuyer &&
            product?.tradeStatus === TradeStatusType.RESERVATION && (
              <S.TradeButtonM onClick={handleTradeConfirmation}>
                거래 확정하기
              </S.TradeButtonM>
            )}
          {meSeller &&
            youBuyer &&
            product?.tradeStatus === TradeStatusType.COMPLETED &&
            !isReviewed && (
              <S.TradeButtonM
                onClick={() => navigate(`/tradePost/${postId}/review`)}
              >
                후기 보내기
              </S.TradeButtonM>
            )}
          {meSeller &&
            youBuyer &&
            product?.tradeStatus === TradeStatusType.COMPLETED &&
            isReviewed && (
              <S.TradeButtonM onClick={() => setIsModalOpen(true)}>
                후기 보기
              </S.TradeButtonM>
            )}
          {!meSeller &&
            !youBuyer &&
            product?.tradeStatus === TradeStatusType.COMPLETED &&
            !isReviewed && (
              <S.TradeButtonM
                onClick={() => navigate(`/tradePost/${postId}/review`)}
              >
                후기 보내기
              </S.TradeButtonM>
            )}
          {!meSeller &&
            !youBuyer &&
            product?.tradeStatus === TradeStatusType.COMPLETED &&
            isReviewed && (
              <S.TradeButtonM onClick={() => setIsModalOpen(true)}>
                후기 보기
              </S.TradeButtonM>
            )}
        </S.Product>

        <S.MessageWrapper ref={scrollRef}>
          {chatMessages && chatMessages.length > 0 && (
            <>
              <S.ChatAccounce>{`🥕 ${to?.username}님과의 대화를 시작해보세요.`}</S.ChatAccounce>

              {chatMessages.map(
                (_chatMessage: ChatMessageType, idx: number) => (
                  // TODO: 키값 unique 값으로 대체 (삭제 로직 없어서 일단 키값)
                  <S.Li key={idx}>
                    {_chatMessage.senderId === from?.id ? (
                      <S.FromMessageContainer>
                        <S.MessageDate>
                          <Moment format="hh:mm, M월D일">
                            {_chatMessage.createdAt}
                          </Moment>
                        </S.MessageDate>
                        <S.FromMessageBox>
                          {_chatMessage.message}
                        </S.FromMessageBox>
                      </S.FromMessageContainer>
                    ) : (
                      <S.ToMessageContainer>
                        <S.ToMessageProfile
                          alt="profile"
                          src={to?.imgUrl || defaultImg}
                        />
                        <S.ToMessageBox>{_chatMessage.message}</S.ToMessageBox>
                        <S.MessageDate>
                          <Moment format="hh:mm, M월D일">
                            {_chatMessage.createdAt}
                          </Moment>
                        </S.MessageDate>
                      </S.ToMessageContainer>
                    )}
                  </S.Li>
                ),
              )}
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
      {isModalOpen && (
        <ReviewCheckModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          reviews={product.reviews}
          seller={meSeller ? from : to}
          buyer={youBuyer ? to : from}
        />
      )}
    </S.OuterWrapper>
  );
};

export default Dialog;
