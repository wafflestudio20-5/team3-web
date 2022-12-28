import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './gnb.styled';
import logoImg from '../../assets/logo.svg';
import { CategoryType } from '../../types/category';

interface GnbProps {
  category: CategoryType;
}

// DESC: global navigation bar
const Gnb: React.FC<GnbProps> = ({ category }: GnbProps) => {
  // DESC: 회원가입 유무 판별, 추후 수정
  const [user] = useState(false);
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
  }, []);

  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <S.NavWrapper>
          <Link to="/">
            <S.LogoImg alt="gnb" src={logoImg} />
          </Link>

          <Link to="/">
            <S.Category selected={selected.landing}>소개</S.Category>
          </Link>
          <Link to="/">
            <S.Category selected={selected.market}>중고거래</S.Category>
          </Link>
          <Link to="/">
            <S.Category selected={selected.life}>동네생활</S.Category>
          </Link>
        </S.NavWrapper>

        <S.AuthWrapper>
          {user ? (
            <Link to="/">
              <S.RouteButton>나의 당근</S.RouteButton>
            </Link>
          ) : (
            <Link to="/">
              <S.RouteButton>로그인/회원가입</S.RouteButton>
            </Link>
          )}
        </S.AuthWrapper>
      </S.Wrapper>
    </S.OuterWrapper>
  );
};

export default Gnb;
