import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { sessionActions } from '../../../store/slices/sessionSlice';

import * as S from './navigation.styled';

interface NavigationProps {
  isMe: boolean;
  selected: {
    landing: boolean;
    market: boolean;
    life: boolean;
    profile: boolean;
  };
}

const Navigation = ({ isMe, selected }: NavigationProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(sessionActions.logout());
    window.location.href = '/';
  }, []);

  return (
    <S.NavWrapper>
      <S.CategoryWrapper>
        <Link to="/">
          <S.Category selected={selected.landing}>소개</S.Category>
        </Link>
        <Link to="/market">
          <S.Category selected={selected.market}>중고거래</S.Category>
        </Link>
        <Link to="/">
          <S.Category selected={selected.life}>동네생활</S.Category>
        </Link>
      </S.CategoryWrapper>

      <S.AuthWrapper>
        {isMe ? (
          <>
            <S.RouteWrapper>
              <Link to="/profile/me">
                <S.Profile selected={selected.profile}>나의 와플</S.Profile>
              </Link>
              <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
            </S.RouteWrapper>
          </>
        ) : (
          <Link to="/login">
            <S.Login>로그인/회원가입</S.Login>
          </Link>
        )}
      </S.AuthWrapper>
    </S.NavWrapper>
  );
};

export default Navigation;
