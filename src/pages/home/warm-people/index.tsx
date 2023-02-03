import { useEffect, useState } from 'react';

import axios from 'axios';
import Award1 from '../award1';
import Award2 from '../award2';
import Award3 from '../award3';
import { User } from '../../../types/users';
import { BASE_URL } from '../../../constant';
import * as S from './warm-people.styled';
import award from '../../../assets/award.svg';
import bubble1 from '../../../assets/bubble1.svg';
import bubble2 from '../../../assets/bubble2.svg';
import bubble3 from '../../../assets/bubble3.svg';

const WarmPeople = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/tradepost/warmest-people`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.BgWrapper>
        <S.H1>혹시, 와플이세요? 🧇</S.H1>
        <S.PositionWrapper>
          <S.BgTemp />
          <S.CurrTemp />
          <S.Bubble1 src={bubble1} alt="bubble" />
          <S.Bubble3 src={bubble3} alt="bubble" />
          <S.Bubble2 src={bubble2} alt="bubble" />
        </S.PositionWrapper>
        <S.SubTitle>
          {'마음 깊이 나누는 정,\n우리 동네에서 가장 따뜻한 이웃을 소개합니다.'}
        </S.SubTitle>

        {users && (
          <>
            <S.AwardBgWrapper>
              <S.AwardTitle src={award} alt="title" />

              <S.AwardInnerWrapper>
                <S.AwardPeopleWrapper>
                  <Award2 user={users?.length === 3 ? users[1] : null}></Award2>
                  <Award1 user={users?.length === 3 ? users[0] : null}></Award1>
                  <Award3 user={users?.length === 3 ? users[2] : null}></Award3>
                </S.AwardPeopleWrapper>
              </S.AwardInnerWrapper>
            </S.AwardBgWrapper>
          </>
        )}
      </S.BgWrapper>
    </S.Wrapper>
  );
};

export default WarmPeople;
