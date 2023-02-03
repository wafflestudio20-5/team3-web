import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import Spinner from '../../components/spinner';
import TxInfo from './container/transaction-info';
import ContentFooter from '../../components/content-footer';
import NavigationButton from './components/navigation-button';

import { getUser } from '../../store/slices/usersSlice';
import { normalToast } from '../../utils/basic-toast-modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

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
              normalToast(err.response?.data.error);
              navigate(-1);
            } else {
              normalToast('요청을 수행할 수 없습니다.');
              navigate(-1);
            }
          }
        });
    }
  }, [userId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrapper>
      <Gnb isColored />
      <S.ContentWrapper>
        <Header
          isLoading={isLoading}
          username={currentUser?.username || null}
        />
        <S.InfoWrapper>
          <UserInfo me={currentUser || null} isLoading={isLoading} />
          <TxInfo me={currentUser || null} isLoading={isLoading} />
        </S.InfoWrapper>

        <S.NavigationWrapper>
          <NavigationButton
            isLoading={isLoading}
            img={reviewIcon}
            text="거래후기"
            handleClick={() => navigate(`/profile/${userId}/review`)}
          />
          <NavigationButton
            isLoading={isLoading}
            img={mannerCommentIcon}
            text="판매목록"
            handleClick={() => navigate(`/profile/${userId}/sell`)}
          />
        </S.NavigationWrapper>
      </S.ContentWrapper>
      <ContentFooter />
    </S.Wrapper>
  );
};

export default ProfileOtherPage;
