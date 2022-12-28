import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';
import { CategoryType } from '../../types/category';

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Gnb category={CategoryType.MARKET} />
    </Wrapper>
  );
};

export default HomePage;
