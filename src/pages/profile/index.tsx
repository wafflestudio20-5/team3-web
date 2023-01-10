import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import TxInfo from './container/transaction-info';
import NavigationButton from './components/navigation-button';

import { getMe } from '../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import * as S from './profile.styled';
import buyIcon from '../../assets/buy-icon.svg';
import lifeIcon from '../../assets/life-icon.svg';
import likeIcon from '../../assets/like-icon.svg';
import sellIcon from '../../assets/sell-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

// TODO: 임시 토큰
import { accessToken } from '../../constant';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState({
    img: false,
    username: false,
    password: false,
    location: false,
  });

  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users);
  // TODO: 토큰 가져오기 (with useSelector)

  useEffect(() => {
    dispatch(getMe(accessToken))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        // TODO: 컴포넌트단에서 케이스별 에러처리
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            console.log(err.response?.data.error);
            // alert 후 로그인 페이지로 redirect
          }
          // ...
        }
      });
  }, [edit.img, edit.username, edit.password, edit.location]);

  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        {/* TODO: My chats 이동, 혹은 채팅 띄우기 */}
        <Header
          username={users.me?.username || null}
          handleClick={() => navigate('/')}
          isLoading={isLoading}
        />
        <S.InfoWrapper>
          <UserInfo
            me={users.me || null}
            edit={edit}
            isLoading={isLoading}
            setEdit={setEdit}
          />
          <TxInfo
            me={users.me || null}
            edit={edit}
            isLoading={isLoading}
            setEdit={setEdit}
          />
        </S.InfoWrapper>

        {/* TODO: 적절한 페이지로 이동 */}
        <S.NavigationWrapper>
          <NavigationButton
            isLoading={isLoading}
            img={sellIcon}
            text="판매내역"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            isLoading={isLoading}
            img={buyIcon}
            text="구매내역"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            isLoading={isLoading}
            img={likeIcon}
            text="찜한 상품"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            isLoading={isLoading}
            img={reviewIcon}
            text="거래후기"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            isLoading={isLoading}
            img={mannerCommentIcon}
            text="매너평가"
            handleClick={() => navigate('/')}
          />
          <NavigationButton
            isLoading={isLoading}
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
