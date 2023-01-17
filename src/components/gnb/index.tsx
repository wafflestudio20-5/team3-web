import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Drawer from '../drawer';
import Profile from './profile';
import Navigation from './navigation';

import { useDrawer } from '../../hooks/useDrawer';
import { useAppSelector } from '../../store/hooks';

import * as S from './gnb.styled';
import logoImg from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

// DESC: global navigation bar
const Gnb = () => {
  const { pathname } = useLocation();
  const [isMe, setIsMe] = useState(false);
  const { active, handleToggleDrawer } = useDrawer();
  const { me } = useAppSelector(state => state.users);

  const [selected, setSelected] = useState({
    landing: false,
    market: false,
    life: false,
    profile: false,
  });

  useEffect(() => {
    if (me) {
      setIsMe(true);
    }
  }, [me]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelected({ ...selected, landing: true });
        break;
      case '/market':
        setSelected({ ...selected, market: true });
        break;
      case '/neighborhood':
        setSelected({ ...selected, life: true });
        break;
      case '/profile/me':
        setSelected({ ...selected, profile: true });
        break;
      default:
        break;
    }
  }, []);

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <Link to="/">
          <S.LogoImg alt="gnb" src={logoImg} />
        </Link>

        {/* DESC: for Desktop */}
        <S.DesktopWrapper>
          <Navigation isMe={isMe} selected={selected} />
        </S.DesktopWrapper>

        {/* DESC: for Mobile */}
        <S.MobileWrapper>
          <S.MenuIconWrapper>
            <MenuIcon onClick={handleToggleDrawer} />
          </S.MenuIconWrapper>
          <Drawer active={active} handleToggleDrawer={handleToggleDrawer}>
            <>
              <Profile user={null} />
              <Navigation isMe={isMe} selected={selected} />
            </>
          </Drawer>
        </S.MobileWrapper>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default Gnb;
