import { useState } from 'react';
import Gnb from '../../components/gnb';
import * as S from './sendReview.styled';
import Product from './components/product';
import Score from './components/score';
import sampleImg from '../../assets/product-sample-5.jpeg';

const SendReview = () => {
  // 줄바꿈 적용을 위해 변수로 저장
  const title1 = 'User님,\nUser2님과 거래가 어떠셨나요?';
  const defaultEmotion = { bad: false, good: false, great: false };
  const [selected, setSelected] = useState(defaultEmotion);

  /* DESC: 아래 3개의 함수를 하나로 묶고 싶은데 파라미터를 만들려고 하면 defaultEmotion에 없는 type이라고 에러 */
  const clickBad = () => {
    selected.bad
      ? setSelected({ ...defaultEmotion })
      : setSelected({ ...defaultEmotion, bad: true });
  };

  const clickGood = () => {
    selected.good
      ? setSelected({ ...defaultEmotion })
      : setSelected({ ...defaultEmotion, good: true });
  };

  const clickGreat = () => {
    selected.great
      ? setSelected({ ...defaultEmotion })
      : setSelected({ ...defaultEmotion, great: true });
  };

  return (
    <>
      <Gnb />
      <S.Wrapper>
        <Product img={sampleImg} title="징거버거 와플" neighbor="자흔" />
        <S.Title>{title1}</S.Title>
        <S.SubTitle>거래 선호도는 나만 볼 수 있어요.</S.SubTitle>
        <S.ScoreBox>
          <Score emotion="bad" isSelected={selected.bad} onClick={clickBad} />
          <Score
            emotion="good"
            isSelected={selected.good}
            onClick={clickGood}
          />
          <Score
            emotion="great"
            isSelected={selected.great}
            onClick={clickGreat}
          />
        </S.ScoreBox>
        <S.Title>따뜻한 거래 경험을 알려주세요!</S.Title>
        <S.SubTitle>
          남겨주신 거래 후기는 상대방의 프로필에 공개돼요.
        </S.SubTitle>
        <S.Review placeholder="여기에 적어주세요. (선택사항)" />
        <S.Button>후기 보내기</S.Button>
      </S.Wrapper>
    </>
  );
};

export default SendReview;
