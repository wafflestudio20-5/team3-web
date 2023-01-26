import * as S from './chat-item.styled';

interface ChatItemProps {
  user: any;
  handleClick: () => void;
}

const ChatItem = ({ user, handleClick }: ChatItemProps) => {
  return <S.Wrapper></S.Wrapper>;
};

export default ChatItem;
