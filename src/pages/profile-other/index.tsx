import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import TxInfo from './container/transaction-info';
import NavigationButton from './components/navigation-button';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { redirectWithMsg } from '../../utils/errors';
import { getUser } from '../../store/slices/usersSlice';

import * as S from './profile.styled';
import lifeIcon from '../../assets/life-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

const ProfileOtherPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = Number(useParams().id);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useAppSelector(state => state.users);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId))
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            }
          }
        });
    }
  }, [userId]);

  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        <Header
          isLoading={isLoading}
          username={currentUser?.username || null}
        />
        <S.InfoWrapper>
          <UserInfo me={currentUser || null} isLoading={isLoading} />
          <TxInfo me={currentUser || null} isLoading={isLoading} />
        </S.InfoWrapper>

        {/* TODO: 적절한 페이지로 이동 */}
        <S.NavigationWrapper>
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

export default ProfileOtherPage;
