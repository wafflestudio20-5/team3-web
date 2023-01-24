import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import TxInfo from './container/transaction-info';
import ContentFooter from '../../components/content-footer';
import NavigationButton from './components/navigation-button';

import { useAuth } from '../../hooks/useAuth';
import { useAppSelector } from '../../store/hooks';

import * as S from './profile.styled';
import buyIcon from '../../assets/buy-icon.svg';
import lifeIcon from '../../assets/life-icon.svg';
import likeIcon from '../../assets/like-icon.svg';
import sellIcon from '../../assets/sell-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { sessionLoading } = useAuth();
  const { me } = useAppSelector(state => state.users);

  const [edit, setEdit] = useState({
    img: false,
    username: false,
    password: false,
    location: false,
  });

  return (
    <S.OuterWrapper>
      <Gnb />

      <S.Wrapper>
        <S.ContentWrapper>
          {/* TODO: My chats 이동 */}
          <Header
            username={me?.username || null}
            handleClick={() =>
              toast('🥕 준비 중입니다.', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            }
            isLoading={sessionLoading}
          />
          <S.InfoWrapper>
            <UserInfo
              me={me || null}
              edit={edit}
              isLoading={sessionLoading}
              setEdit={setEdit}
            />
            <TxInfo
              me={me || null}
              edit={edit}
              isLoading={sessionLoading}
              setEdit={setEdit}
            />
          </S.InfoWrapper>

          {/* TODO: 적절한 페이지로 이동 */}
          <S.NavigationWrapper>
            <NavigationButton
              isLoading={sessionLoading}
              img={sellIcon}
              text="판매내역"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={buyIcon}
              text="구매내역"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={likeIcon}
              text="찜한 상품"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={reviewIcon}
              text="거래후기"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={mannerCommentIcon}
              text="매너평가"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={lifeIcon}
              text="동네생활"
              handleClick={() => navigate('/')}
            />
          </S.NavigationWrapper>
        </S.ContentWrapper>
        <ContentFooter />
      </S.Wrapper>
    </S.OuterWrapper>
  );
};

export default ProfilePage;
