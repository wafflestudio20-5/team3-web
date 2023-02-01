import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import ChatContainer from './chat-container';
import Spinner from '../../components/spinner';

import { useAuth } from '../../hooks/useAuth';

import { ChatWrapper, Wrapper } from './chat.styled';
import { normalToast } from '../../utils/basic-toast-modal';

const ChatPage = () => {
  const navigate = useNavigate();
  const { sessionLoading, isAuthed } = useAuth();

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('로그인이 필요합니다.');
  }

  if (sessionLoading || !isAuthed) {
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
