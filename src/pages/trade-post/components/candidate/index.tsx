import { TradeStatusType } from '../../../../types/tradePost';
import * as S from './candidate.styled';

import tradeComplete from '../../../../assets/trade-complete.png';
import defaultImg from '../../../../assets/default-profile.png';

interface CandidateProps {
  imgUrl?: string | null;
  username?: string | null;
  status?: TradeStatusType;
  isBuyer?: boolean;
  handleChatStart: () => void;
  handleSetReservation: () => void;
  animation: boolean;
}

const Candidate = ({
  imgUrl,
  username,
  status,
  isBuyer,
  handleChatStart,
  handleSetReservation,
  animation,
}: CandidateProps) => {
  return (
    <S.Wrapper animation={animation}>
      <S.User>
        <S.Img src={imgUrl || defaultImg} alt="user" />
        <S.Text>{username}</S.Text>
      </S.User>

      <S.ButtonWrapper>
        {status === TradeStatusType.COMPLETED && (
          <>
            {isBuyer && (
              <>
                <S.Badge src={tradeComplete} />
                <S.Complete>거래 완료!</S.Complete>
              </>
            )}
            <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
          </>
        )}

        {status !== TradeStatusType.COMPLETED && (
          <>
            {isBuyer ? (
              <S.ReservationButton onClick={handleSetReservation}>
                {'거래확정'}
              </S.ReservationButton>
            ) : (
              <S.TradingButton onClick={handleSetReservation}>
                {'예약하기'}
              </S.TradingButton>
            )}

            <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Candidate;
