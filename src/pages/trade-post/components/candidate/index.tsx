import { useNavigate } from 'react-router-dom';

import * as S from './candidate.styled';
import { TradeStatusType } from '../../../../types/tradePost';

import defaultImg from '../../../../assets/default-profile.png';
import tradeComplete from '../../../../assets/trade-complete.png';
import tradeReservation from '../../../../assets/trade-reservation.png';
import { useEffect, useState } from 'react';

interface CandidateProps {
  imgUrl?: string | null;
  username?: string | null;
  status?: TradeStatusType | null;
  isBuyer?: boolean;
  youId?: number;
  handleChatStart: () => void;
  animation: boolean;
}

const Candidate = ({
  imgUrl,
  username,
  status,
  isBuyer,
  youId,
  handleChatStart,
  animation,
}: CandidateProps) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [announce, setAnnounce] = useState('');

  useEffect(() => {
    if (status === TradeStatusType.COMPLETED) {
      setAnnounce(
        '🥕 나와 거래를 한 이웃이에요!\n아직 거래후기를\n남기지 않았다면,\n지금 내 이웃과의 경험을\n공유해주세요. 💌',
      );
    } else {
      setAnnounce(
        '나와 거래예약을 한 이웃이에요!\n🥕 거래가 완료되면 거래 확정을,\n다른 분과 예약하고 싶다면\n다른 채팅방에 들어가\n🙋‍♂️ 예약자를 변경해주세요.',
      );
    }
  }, [status]);

  return (
    <S.Wrapper animation={animation}>
      <S.InnerWrapper>
        <S.User onClick={() => navigate(`/profile/${youId}`)}>
          <S.Img src={imgUrl || defaultImg} alt="user" />
          <S.Text>{username}</S.Text>
        </S.User>

        <S.ButtonWrapper>
          {status === TradeStatusType.COMPLETED && (
            <>
              {isBuyer && (
                <S.ArrowWrapper>
                  <S.Badge
                    src={tradeComplete}
                    onMouseOver={() => {
                      setOpenModal(true);
                    }}
                    onMouseOut={() => {
                      setOpenModal(false);
                    }}
                  />
                  {openModal && <S.ArrowBox>{announce}</S.ArrowBox>}
                </S.ArrowWrapper>
              )}
              <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
            </>
          )}

          {status !== TradeStatusType.COMPLETED && (
            <>
              {isBuyer && (
                <S.ArrowWrapper>
                  <S.Badge
                    src={tradeReservation}
                    onMouseOver={() => {
                      setOpenModal(true);
                    }}
                    onMouseOut={() => {
                      setOpenModal(false);
                    }}
                  />
                  {openModal && <S.ArrowBox>{announce}</S.ArrowBox>}
                </S.ArrowWrapper>
              )}
              <S.ChatButton onClick={handleChatStart}>채팅하기</S.ChatButton>
            </>
          )}
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Candidate;
