// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';

const HomePage = () => {
  // TODO: 테스트용 fetch
  // useEffect(() => {
  //   fetch('/users/me')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);

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
