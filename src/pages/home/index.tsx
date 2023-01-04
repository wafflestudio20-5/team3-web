// import { useEffect } from 'react';
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
    </Wrapper>
  );
};

export default HomePage;
