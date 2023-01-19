import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '../drawer';
import Profile from './profile';
import { Footer } from './footer';
import Navigation from './navigation';
import NavigationDrawer from './navigation-drawer';

import { loadItem } from '../../utils/storage';
import { useDrawer } from '../../hooks/useDrawer';
import { getMe } from '../../store/slices/usersSlice';
import { postRefresh } from '../../store/slices/sessionSlice';
import { sessionActions } from '../../store/slices/sessionSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import * as S from './gnb.styled';
import lock from '../../assets/lock.svg';
import logoImg from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

// DESC: global navigation bar
const Gnb = () => {
  const { pathname } = useLocation();
  const [isMe, setIsMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { active, handleToggleDrawer } = useDrawer();
  const { me } = useAppSelector(state => state.users);
  const { accessToken } = useAppSelector(state => state.session);

  const [selected, setSelected] = useState({
    intro: false,
    market: false,
    neighborhood: false,
    profile: false,
  });

  useEffect(() => {
    if (me) {
      setIsMe(true);
    }
  }, [me]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getMe(accessToken));
    } else {
      const refreshToken = loadItem('refreshToken');
      if (refreshToken) {
        dispatch(postRefresh(refreshToken))
          .unwrap()
          .then(res => dispatch(getMe(res.accessToken)));
      }
    }
  }, [accessToken]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelected({ ...selected, intro: true });
        break;
      case '/market':
        setSelected({ ...selected, market: true });
        break;
      case '/neighborhood':
        setSelected({ ...selected, neighborhood: true });
        break;
      case '/profile/me':
        setSelected({ ...selected, profile: true });
        break;
      default:
        break;
    }
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(sessionActions.logout());
    window.location.href = '/';
  }, []);

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <S.LogoImg alt="gnb" src={logoImg} onClick={() => navigate('/')} />

        <Navigation selected={selected} />

        <S.MenuIconWrapper>
          <MenuIcon onClick={handleToggleDrawer} />
        </S.MenuIconWrapper>
        <Drawer active={active} handleToggleDrawer={handleToggleDrawer}>
          <>
            <S.DrawerWrapper>
              <Profile user={me} />
              <NavigationDrawer isMe={isMe} selected={selected} />
            </S.DrawerWrapper>
            {me ? (
              <S.Auth onClick={handleLogout}>
                <S.LockIcon alt="lock" src={lock} />
                로그아웃
              </S.Auth>
            ) : (
              <S.Auth onClick={() => navigate('/login')}>
                <S.LockIcon alt="lock" src={lock} />
                로그인
              </S.Auth>
            )}

            <Footer />
          </>
        </Drawer>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default Gnb;
