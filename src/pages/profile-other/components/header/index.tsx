import * as S from './header.styled';
import { ReactComponent as DaangnIcon } from '../../../../assets/daangn.svg';

interface HeaderProps {
  isLoading: boolean;
  username: string | null;
}

const Header = ({ username, isLoading }: HeaderProps) => {
  return (
    <S.Wrapper>
      {!isLoading ? (
        <S.TitleBox>
          <DaangnIcon />
          <S.Title>{username && `${username}'s Waffle`}</S.Title>
        </S.TitleBox>
      ) : (
        <>
          <S.SkeletonTitleBox />
          <S.SkeletonChatBox />
        </>
      )}
    </S.Wrapper>
  );
};

export default Header;
