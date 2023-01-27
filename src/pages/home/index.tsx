import Section0 from './section0';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Gnb from '../../components/gnb';
import Footer from '../../components/footer';

import { Wrapper } from './home.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb isColored />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
