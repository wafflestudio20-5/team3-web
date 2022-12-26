import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './gnb.styled';
import logoImg from '../../assets/logo.svg';

// DESC: global navigation bar
const Gnb: React.FC = () => {
  const [user, setUser] = useState(false);

  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <S.NavWrapper>
          <Link to="/">
            <S.LogoImg alt="gnb" src={logoImg} />
          </Link>

          <Link to="/">
            <S.Category>소개</S.Category>
          </Link>
          <Link to="/">
            <S.Category>중고거래</S.Category>
          </Link>
          <Link to="/">
            <S.Category>동네생활</S.Category>
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
