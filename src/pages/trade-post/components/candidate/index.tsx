import * as S from './candidate.styled';
import { TradeStatusType } from '../../../../types/tradePost';

import defaultImg from '../../../../assets/default-profile.png';
import tradeComplete from '../../../../assets/trade-complete.png';
import tradeReservation from '../../../../assets/trade-reservation.png';

interface CandidateProps {
  imgUrl?: string | null;
  username?: string | null;
  status?: TradeStatusType;
  isBuyer?: boolean;
  handleChatStart: () => void;
  animation: boolean;
}

const Candidate = ({
  imgUrl,
  username,
  status,
  isBuyer,
  handleChatStart,
  animation,
}: CandidateProps) => {
  return (
    <S.Wrapper animation={animation}>
      <S.InnerWrapper>
        <S.User>
          <S.Img src={imgUrl || defaultImg} alt="user" />
          <S.Text>{username}</S.Text>
        </S.User>

        <S.ButtonWrapper>
          {status === TradeStatusType.COMPLETED && (
            <>
              {isBuyer && <S.Badge src={tradeComplete} />}
              <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
            </>
          )}

          {status !== TradeStatusType.COMPLETED && (
            <>
              {isBuyer && <S.Badge src={tradeReservation} />}
              <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
            </>
          )}
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Candidate;
