import { Link } from 'react-router-dom';
import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb />
      <a>홈페이지입니다</a>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/tradepost/1">중고거래 상세페이지</Link>
    </Wrapper>
  );
};

export default HomePage;
