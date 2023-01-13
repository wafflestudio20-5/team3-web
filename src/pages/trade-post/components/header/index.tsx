import * as S from './header.styled';
import { ReactComponent as ChatIcon } from '../../../../assets/chat.svg';
import { ReactComponent as DaangnIcon } from '../../../../assets/daangn.svg';

interface HeaderProps {
  username: string | null;
  handleClick: () => void;
  isLoading: boolean;
}

const Header = ({ username, handleClick, isLoading }: HeaderProps) => {
  return (
    <S.Wrapper>
      {!isLoading ? (
        <>
          <S.TitleBox>
            <DaangnIcon />
            <S.Title>{username && `${username}'s Waffle`}</S.Title>
          </S.TitleBox>
          <S.ChatBtn onClick={handleClick}>
            <ChatIcon />
            <S.Chat>My chats</S.Chat>
          </S.ChatBtn>
        </>
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
