import Gnb from '../../components/gnb';
import ChatContainer from './chat-container';

import { Wrapper } from './chat.styled';

const ChatPage = () => {
  return (
    <Wrapper>
      <Gnb />
      <ChatContainer />
    </Wrapper>
  );
};

export default ChatPage;
