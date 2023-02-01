import { useCallback, useState } from 'react';

import * as S from './section0.styled';
import scroll from '../../../assets/wheel.svg';
import landing1 from '../../../assets/landing1.svg';
import landing2 from '../../../assets/landing2.svg';
import click from '../../../assets/cursor-white.png';

const Section0 = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const textToBeTyped = '당신 근처의, 와플마켓';
  const [isAdding, setIsAdding] = useState(true);

  const typingAnimation = useCallback(() => {
    setText(textToBeTyped.slice(0, index));
    if (isAdding) {
      if (index > textToBeTyped.length) {
        setIsAdding(false);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIsAdding(true);
      } else {
        setIndex(index - 1);
      }
    }
  }, [text, isAdding, index]);

  setTimeout(() => {
    typingAnimation();
  }, 180);

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Typing>{text}</S.Typing>
        <S.WindowWrapper>
          <S.Window>
            <S.Nav>
              <S.Close />
              <S.Hold />
              <S.Open />
              <S.Domain>https://www.waffle-market.store</S.Domain>
            </S.Nav>
            <S.Main>
              <S.Video
                src="https://user-images.githubusercontent.com/109863663/215331189-00359a1e-51e6-444f-a989-4d7f2baa8199.mov"
                loop
                autoPlay
                playsInline
              ></S.Video>
              {/* <S.MockUpImg src={mockup} /> */}
            </S.Main>
          </S.Window>
          <S.MockupImg2 src={landing1} alt="img" />
          <S.MockupImg3 src={landing2} alt="img" />
          <S.Cursor src={click} alt="cursor" />
        </S.WindowWrapper>

        <S.ScrollWrapper>
          <S.ScrollDown>SCROLL DOWN</S.ScrollDown>
          <S.Scroll src={scroll} />
        </S.ScrollWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Section0;
