import { useCallback, useEffect, useState, useRef } from 'react';
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

interface GnbProps {
  isColored?: boolean;
}
// DESC: global navigation bar
const Gnb = ({ isColored }: GnbProps) => {
  const { pathname } = useLocation();
  const [isMe, setIsMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { active, handleToggleDrawer } = useDrawer();
  const { me } = useAppSelector(state => state.users);
  const expiryTime = Number(loadItem('expiryTime'));

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
    const refreshToken = loadItem('refreshToken');
    if (!loadItem('accessToken') || !expiryTime) {
      if (refreshToken) {
        dispatch(postRefresh(refreshToken as string))
          .unwrap()
          .then(res => dispatch(getMe(res.accessToken)));
      }
    } else {
      if (refreshToken) {
        dispatch(getMe(loadItem('accessToken')));
      }
    }
  }, [loadItem('accessToken'), expiryTime]);

  // DESC: 토큰 만료시간 1분 전에 refresh
  useEffect(() => {
    const refreshToken = loadItem('refreshToken');
    if (refreshToken) {
      const refreshSession = () => {
        dispatch(postRefresh(refreshToken as string))
          .unwrap()
          .then(res => {
            // console.log('refresh!!!', res);
            dispatch(getMe(res.accessToken));
          });
      };
      const timeout = setTimeout(
        refreshSession,
        expiryTime - Date.now() - 60 * 1000,
      );
      return () => clearTimeout(timeout);
    }
  }, [loadItem('accessToken'), expiryTime]);

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

  // 임시: 토큰 만료 전 refresh 확인용
  const [minute, setMinute] = useState<any>();
  const [second, setSecond] = useState<any>();
  const interval = useRef(null);
  useEffect(() => {
    // console.log(new Date(expiryTime));
    // console.log(accessToken);
    (interval.current as any) = setInterval(() => {
      setMinute(new Date(expiryTime - Date.now()).getMinutes());
      setSecond(new Date(expiryTime - Date.now()).getSeconds());
    }, 1000);
    return () => clearInterval(interval.current as any);
  }, [expiryTime]);

  return (
    <S.Wrapper isColored={isColored}>
      <S.InnerWrapper>
        <S.LogoImg alt="gnb" src={logoImg} onClick={() => navigate('/')} />

        <S.DesktopWrapper>
          <Navigation selected={selected} />
        </S.DesktopWrapper>

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
            {loadItem('accessToken') && (
              <span>
                남은시간= {minute}:{second}
              </span>
            )}
            <Footer />
          </>
        </Drawer>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Gnb;
