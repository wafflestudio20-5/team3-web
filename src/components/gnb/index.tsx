import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Drawer from '../drawer';
import Profile from './profile';
import Navigation from './navigation';

import { useDrawer } from '../../hooks/useDrawer';

import * as S from './gnb.styled';
import logoImg from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

// DESC: global navigation bar
const Gnb = () => {
  const { pathname } = useLocation();
  const { active, handleToggleDrawer } = useDrawer();

  // DESC: 로그인 유무 판별, 추후 수정 user (type: UserType)
  const [user] = useState(true);
  const [selected, setSelected] = useState({
    landing: false,
    market: false,
    life: false,
    profile: false,
  });

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelected({ ...selected, landing: true });
        break;
      case '/market': // TODO: 추후 수정
        setSelected({ ...selected, market: true });
        break;
      case '/life':
        setSelected({ ...selected, life: true });
        break;
      case '/profile/1': // TODO: /profile/id 꼴로 수정
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
          <Navigation user={user} selected={selected} />
        </S.DesktopWrapper>

        {/* DESC: for Mobile */}
        <S.MobileWrapper>
          <S.MenuIconWrapper>
            <MenuIcon onClick={handleToggleDrawer} />
          </S.MenuIconWrapper>
          <Drawer active={active} handleToggleDrawer={handleToggleDrawer}>
            <>
              <Profile user={user} />
              <Navigation user={user} selected={selected} />
            </>
          </Drawer>
        </S.MobileWrapper>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default Gnb;
