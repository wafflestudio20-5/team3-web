import * as S from './header.styled';
import { ReactComponent as ChatIcon } from '../../../../assets/chat.svg';
import { ReactComponent as DaangnIcon } from '../../../../assets/daangn.svg';

interface HeaderProps {
  username: string | null;
  handleClick: () => void;
}

const Header = ({ username, handleClick }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <DaangnIcon />
        <S.Title>{`${username}'s Waffle`}</S.Title>
      </S.TitleBox>
      <S.ChatBtn onClick={handleClick}>
        <ChatIcon />
        <S.Chat>My chats</S.Chat>
      </S.ChatBtn>
    </S.Wrapper>
  );
};

export default Header;
