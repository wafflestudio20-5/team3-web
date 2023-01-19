import { useNavigate } from 'react-router-dom';
import * as S from './navigation-drawer.styled';

interface NavigationDrawerProps {
  isMe: boolean;
  selected: {
    intro: boolean;
    market: boolean;
    neighborhood: boolean;
    profile: boolean;
  };
}

const NavigationDrawer = ({ isMe, selected }: NavigationDrawerProps) => {
  const navigate = useNavigate();

  return (
    <S.NavWrapper>
      <S.AuthWrapper>
        {isMe ? (
          <>
            <S.Category onClick={() => navigate('/profile/me')}>
              <S.Empha>
                <S.Underline>나의 와플</S.Underline> 바로가기
              </S.Empha>
            </S.Category>
          </>
        ) : (
          <S.Category onClick={() => navigate('/login')}>
            <S.Empha>
              <S.Underline>로그인</S.Underline>이 필요해요!
            </S.Empha>
          </S.Category>
        )}
      </S.AuthWrapper>

      <S.CategoryWrapper>
        <S.Category selected={selected.intro} onClick={() => navigate('/')}>
          소개
        </S.Category>
        <S.Category
          selected={selected.market}
          onClick={() => navigate('/market')}
        >
          중고거래
        </S.Category>
        <S.Category
          selected={selected.neighborhood}
          onClick={() => navigate('/neighborhood')}
        >
          동네생활
        </S.Category>
      </S.CategoryWrapper>
    </S.NavWrapper>
  );
};

export default NavigationDrawer;
