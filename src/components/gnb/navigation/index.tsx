import { Link } from 'react-router-dom';
import * as S from './navigation.styled';

interface NavigationProps {
  // TODO: 유저 인터페이스 따라 타입 수정하기 user: UserType
  user: boolean;
  selected: {
    landing: boolean;
    market: boolean;
    life: boolean;
    profile: boolean;
  };
}

const Navigation = ({ user, selected }: NavigationProps) => {
  // TODO: 라우팅 추가, user 유무 검증 수정
  return (
    <S.NavWrapper>
      <S.CategoryWrapper>
        <Link to="/">
          <S.Category selected={selected.landing}>소개</S.Category>
        </Link>
        <Link to="/">
          <S.Category selected={selected.market}>중고거래</S.Category>
        </Link>
        <Link to="/">
          <S.Category selected={selected.life}>동네생활</S.Category>
        </Link>
      </S.CategoryWrapper>

      <S.AuthWrapper>
        {user ? (
          <Link to="/profile/1">
            <S.Route selected={selected.profile}>나의 와플</S.Route>
          </Link>
        ) : (
          <Link to="/login">
            <S.Route>로그인/회원가입</S.Route>
          </Link>
        )}
      </S.AuthWrapper>
    </S.NavWrapper>
  );
};

export default Navigation;
