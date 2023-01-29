import * as S from './header.styled';
import { ReactComponent as ChatIcon } from '../../../../assets/chat.svg';
import { ReactComponent as DaangnIcon } from '../../../../assets/daangn.svg';

interface HeaderProps {
  isLoading: boolean;
  username: string | null;
  handleClick: () => void;
  unread: number;
}

const Header = ({ username, handleClick, isLoading, unread }: HeaderProps) => {
  return (
    <S.Wrapper>
      {!isLoading ? (
        <>
          <S.ContentWrapper>
            <S.TitleBox>
              <DaangnIcon />
              <S.Title>{username && `${username}'s Waffle`}</S.Title>
            </S.TitleBox>
            <S.ChatBtn onClick={handleClick}>
              <ChatIcon />
              <S.Chat>My chats</S.Chat>
            </S.ChatBtn>
          </S.ContentWrapper>
          {unread > 0 && <S.Unread>{unread}</S.Unread>}
        </>
      ) : (
        <S.ContentWrapper>
          <S.SkeletonTitleBox />
          <S.SkeletonChatBox />
        </S.ContentWrapper>
      )}
    </S.Wrapper>
  );
};

export default Header;
