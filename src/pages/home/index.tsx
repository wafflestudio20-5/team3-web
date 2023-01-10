import { Link } from 'react-router-dom';
import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb />
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/chat/1">채팅하기</Link>
    </Wrapper>
  );
};

export default HomePage;
