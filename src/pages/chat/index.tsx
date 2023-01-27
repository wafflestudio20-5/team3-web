import Gnb from '../../components/gnb';
import ChatContainer from './chat-container';
import Spinner from '../../components/spinner';

import { useAuth } from '../../hooks/useAuth';

import { ChatWrapper, Wrapper } from './chat.styled';

const ChatPage = () => {
  const { sessionLoading } = useAuth();

  if (sessionLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Gnb isColored />
      <ChatWrapper>
        <ChatContainer />
      </ChatWrapper>
    </Wrapper>
  );
};

export default ChatPage;
