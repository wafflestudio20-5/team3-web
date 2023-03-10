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
        'š„ ėģ ź±°ėė„¼ ķ ģ“ģģ“ģģ!\nģģ§ ź±°ėķźø°ė„¼\nėØźø°ģ§ ģģė¤ė©“,\nģ§źø ė“ ģ“ģź³¼ģ ź²½ķģ\nź³µģ ķ“ģ£¼ģøģ. š',
      );
    } else {
      setAnnounce(
        'ėģ ź±°ėģģ½ģ ķ ģ“ģģ“ģģ!\nš„ ź±°ėź° ģė£ėė©“ ź±°ė ķģ ģ,\nė¤ė„ø ė¶ź³¼ ģģ½ķź³  ģ¶ė¤ė©“\nė¤ė„ø ģ±ķė°©ģ ė¤ģ“ź°\nšāāļø ģģ½ģė„¼ ė³ź²½ķ“ģ£¼ģøģ.',
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
              <S.ChatButton onClick={handleChatStart}>ģ±ķķźø°</S.ChatButton>
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
              <S.ChatButton onClick={handleChatStart}>ģ±ķķźø°</S.ChatButton>
            </>
          )}
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Candidate;
