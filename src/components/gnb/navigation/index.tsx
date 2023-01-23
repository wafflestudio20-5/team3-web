import { Link } from 'react-router-dom';

import * as S from './navigation.styled';

interface NavigationProps {
  selected: {
    intro: boolean;
    market: boolean;
    neighborhood: boolean;
    profile: boolean;
  };
}

const Navigation = ({ selected }: NavigationProps) => {
  return (
    <S.NavWrapper>
      <S.CategoryWrapper>
        <Link to="/">
          <S.Category selected={selected.intro}>소개</S.Category>
        </Link>
        <Link to="/market">
          <S.Category selected={selected.market}>중고거래</S.Category>
        </Link>
        <Link to="/neighborhood">
          <S.Category selected={selected.neighborhood}>동네생활</S.Category>
        </Link>
      </S.CategoryWrapper>
    </S.NavWrapper>
  );
};

export default Navigation;
