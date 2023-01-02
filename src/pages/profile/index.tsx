import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import TxInfo from './container/transaction-info';
import NavigationButton from './components/navigation-button';

import { requestMyInfo } from '../../api/users';

import * as S from './profile.styled';
import buyIcon from '../../assets/buy-icon.svg';
import lifeIcon from '../../assets/life-icon.svg';
import likeIcon from '../../assets/like-icon.svg';
import sellIcon from '../../assets/sell-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);

  // TODO: 토큰 가져오기 (with useSelector)
  const accessToken = 'sampleToken';

  useEffect(() => {
    // TODO: API 호출, GET /users/me
    // TODO: 요청 실패시 에러 처리 (프로필 페이지 접근 X), 에러 처리 쉬운 쪽으로 API 함수 작성
    (async () => {
      const res = await requestMyInfo(accessToken);
      if (res) {
        setUsername(res?.data?.username);
      }
    })();
  }, []);

  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        {/* TODO: My chats 이동, 혹은 채팅 띄우기 */}
        <Header username={username} handleClick={() => navigate('/')} />
        <S.InfoWrapper>
          <UserInfo />
          <TxInfo />
        </S.InfoWrapper>

        {/* TODO: 적절한 페이지로 이동 */}
        <S.NavigationWrapper>
          <NavigationButton
            img={sellIcon}
            text="판매내역"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            img={buyIcon}
            text="구매내역"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            img={likeIcon}
            text="찜한 상품"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            img={reviewIcon}
            text="거래후기"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            img={mannerCommentIcon}
            text="매너평가"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            img={lifeIcon}
            text="동네생활"
            handleClick={() => navigate('/')}
          />
        </S.NavigationWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ProfilePage;
