import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Gnb from '../../components/gnb';
import { Wrapper } from './home.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Wrapper>
  );
};

export default HomePage;
