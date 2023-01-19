import { useCallback, useState } from 'react';

import * as S from './section0.styled';
import scroll from '../../../assets/wheel.svg';
import map from '../../../assets/mockup-sample.jpg';
import character from '../../../assets/daangni.png';

const Section0 = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const textToBeTyped = '당신 근처의, 와플마켓';
  const [isAdding, setIsAdding] = useState(true);

  const typingAnimation = useCallback(() => {
    setText(textToBeTyped.slice(0, index));
    if (isAdding) {
      if (text[index] === ',') {
        setTimeout(() => {
          if (index > textToBeTyped.length) {
            setIsAdding(false);
          } else {
            setIndex(index + 1);
          }
        }, 180);
      } else {
        if (index > textToBeTyped.length) {
          setIsAdding(false);
        } else {
          setIndex(index + 1);
        }
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
  }, 160);

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
              <S.Domain>https://www.waffle-market.com</S.Domain>
            </S.Nav>
            <S.Main>
              <S.MockUpImg src={map} />
            </S.Main>
          </S.Window>
          <S.Daangni src={character} alt="daangn" />
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
