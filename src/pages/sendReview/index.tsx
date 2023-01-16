import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import Gnb from '../../components/gnb';

import Product from './components/product';
import Score from './components/score';
import sampleImg from '../../assets/product-sample-5.jpeg';
import * as S from './sendReview.styled';

const SendReview = () => {
  // 줄바꿈 적용을 위해 변수로 저장
  const title1 = 'User님,\nUser2님과 거래가 어떠셨나요?';
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const accessToken = useAppSelector(state => state.accessToken);
  const defaultEmotion = { bad: false, good: false, great: false };
  const [selected, setSelected] = useState(defaultEmotion);
  const [score, setScore] = useState(0);
  const [content, setContent] = useState('');

  /* DESC: 아래 3개의 함수를 하나로 묶고 싶은데 파라미터를 만들려고 하면 defaultEmotion에 없는 type이라고 에러 */
  const clickBad = () => {
    if (selected.bad) {
      setSelected({ ...defaultEmotion });
      setScore(0);
    } else {
      setSelected({ ...defaultEmotion, bad: true });
      setScore(-0.3);
    }
  };

  const clickGood = () => {
    if (selected.good) {
      setSelected({ ...defaultEmotion });
      setScore(0);
    } else {
      setSelected({ ...defaultEmotion, good: true });
      setScore(0.3);
    }
  };

  const clickGreat = () => {
    if (selected.great) {
      setSelected({ ...defaultEmotion });
      setScore(0);
    } else {
      setSelected({ ...defaultEmotion, great: true });
      setScore(0.6);
    }
  };

  // TODO: tradepost 정보 가져오기
  //   const [tradeInfo, setTradeInfo] = useState({
  //     title: '',
  //     img: '',
  //     neighbor: '',
  //   });
  //   useEffect(() => {
  //     dispatch(getTradePost(accessToken, postNumber)).then(() => {
  //       setTradeInfo({ title: '', img: '', neighbor: '' });
  //     });
  //   }, []);

  const handleSubmit = () => {
    // if (score === 0) => {
    //   toast('점수를 선택해주세요')
    // } else {
    //   requestPostReview(postId, score, content)
    // }
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
        <S.Review
          placeholder="여기에 적어주세요. (선택사항)"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <S.Button onClick={handleSubmit}>후기 보내기</S.Button>
      </S.Wrapper>
    </>
  );
};

export default SendReview;
