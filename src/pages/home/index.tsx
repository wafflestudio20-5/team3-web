import Section0 from './section0';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Gnb from '../../components/gnb';
import Footer from '../../components/footer';

import bgImg from '../../assets/background.png';
import { Background, Wrapper } from './home.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Gnb isMain />
      <Background src={bgImg} />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
