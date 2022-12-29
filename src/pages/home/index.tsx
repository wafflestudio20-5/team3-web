import { Link } from 'react-router-dom';
import { Wrapper } from './home.styled';

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <a>홈페이지입니다</a>
      <Link to="/login">
        <a>로그인</a>
      </Link>
      <Link to="/signup">
        <a>회원가입</a>
      </Link>
    </Wrapper>
  );
};

export default HomePage;
