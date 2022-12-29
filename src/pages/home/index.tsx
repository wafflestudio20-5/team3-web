import { Link } from 'react-router-dom';
import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';
import { CategoryType } from '../../types/category';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb category={CategoryType.MARKET} />
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
