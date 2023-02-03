import Moment from 'react-moment';
import * as S from './chat-item.styled';
import avatar from '../../../../assets/default-avatar.svg';
import defaultImg from '../../../../assets/default-others.svg';
import { ChatType } from '../../../../types/chat';

interface ChatItemProps {
  chat: ChatType;
  handleClick: () => void;
}

const ChatItem = ({ chat, handleClick }: ChatItemProps) => {
  const chatCondition = chat && chat?.lastChat;
  const imgCondition =
    chat && chat?.post?.imageUrls && chat?.post.imageUrls.length > 0;

  return (
    <S.Wrapper onClick={handleClick}>
      <S.ProfileImg src={chat?.you?.imgUrl || avatar} alt="profile" />
      <S.ContentWrapper>
        <S.User>
          <S.Username>{chat?.you?.username}</S.Username>
          {chatCondition && (
            <S.LastChat>
              {' · '}
              <Moment fromNow>{chat?.lastChat?.createdAt}</Moment>
            </S.LastChat>
          )}
        </S.User>
        {chatCondition && <S.Message>{chat?.lastChat?.message}</S.Message>}
      </S.ContentWrapper>

      {chat?.unreadChatCount && chat?.unreadChatCount > 0 && (
        <S.Unread>{chat?.unreadChatCount}</S.Unread>
      )}
      <S.PostImg
        src={imgCondition ? chat?.post?.imageUrls[0] : defaultImg}
        alt="post"
      />
    </S.Wrapper>
  );
};

export default ChatItem;
