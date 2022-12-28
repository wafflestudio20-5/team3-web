import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '../drawer';
import Profile from './profile';
import Navigation from './navigation';

import { useDrawer } from '../../hooks/useDrawer';
import { CategoryType } from '../../types/category';

import * as S from './gnb.styled';
import logoImg from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

interface GnbProps {
  category: CategoryType;
}

// DESC: global navigation bar
const Gnb = ({ category }: GnbProps) => {
  const { active, handleToggleDrawer } = useDrawer();

  // DESC: 로그인 유무 판별, 추후 수정 user (type: UserType)
  const [user] = useState(true);
  const [selected, setSelected] = useState({
    landing: false,
    market: false,
    life: false,
  });

  useEffect(() => {
    switch (category) {
      case CategoryType.LANDING:
        setSelected({ ...selected, landing: true });
        break;
      case CategoryType.MARKET:
        setSelected({ ...selected, market: true });
        break;
      case CategoryType.LIFE:
        setSelected({ ...selected, life: true });
        break;
      default:
        break;
    }
  }, [active]);

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
