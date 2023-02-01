import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

import Gnb from '../../components/gnb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadItem } from '../../utils/storage';
import { getTradePost } from '../../store/slices/tradePostSlice';
import { postReview } from '../../store/slices/reviewSlice';
import { redirectWithMsg } from '../../utils/errors';

import Product from './components/product';
import Score from './components/score';
import alt from '../../assets/post-alt.png';
import * as S from './sendReview.styled';

const SendReview = () => {
  const navigate = useNavigate();
  const params = useParams();
  const postId = Number(params.id);
  const dispatch = useAppDispatch();
  const { me } = useAppSelector(state => state.users);
  const accessToken = loadItem('accessToken');
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

  const [tradeInfo, setTradeInfo] = useState({
    title: '',
    img: '',
    neighbor: '',
    neighborId: 0,
  });
  const [isValidPage, setIsValidPage] = useState(true);
  useEffect(() => {
    if (accessToken && me && postId) {
      dispatch(getTradePost({ accessToken: accessToken, postId: postId }))
        .unwrap()
        .then(res => {
          setTradeInfo({
            title: res?.title,
            img: res?.imageUrls[0],
            neighbor:
              me.id === res?.seller.id
                ? (res?.buyer as any).username
                : res?.seller.username,
            neighborId:
              me.id === res?.seller.id
                ? (res?.buyer as any).id
                : res?.seller.id,
          });
        })
        .catch(() => {
          setIsValidPage(false);
        });
    }
  }, [accessToken, postId]);

  const handleSubmit = () => {
    if (score === 0) {
      toast('거래 선호도를 선택해주세요');
    } else {
      if (accessToken && postId) {
        dispatch(postReview({ accessToken, postId, score, content }))
          .unwrap()
          .then(res => {
            toast('리뷰가 등록되었습니다');
            navigate(`/tradepost/${postId}`);
          })
          .catch(err => {
            if (axios.isAxiosError(err)) {
              if (err.response?.status === 404) {
                redirectWithMsg(2, err.response?.data.error, () =>
                  navigate(-1),
                );
              } else if (err.response?.status === 403) {
                // TODO: refresh 후 재요청
                redirectWithMsg(2, err.response?.data.error, () =>
                  navigate('/'),
                );
              } else {
                redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                  navigate('/'),
                );
              }
            }
          });
      }
    }
  };
  if (!isValidPage) {
    navigate(-1);
  }
  // 줄바꿈 적용을 위해 변수로 저장
  const title1 = `${me?.username}님,\n${tradeInfo?.neighbor}님과 거래가 어떠셨나요?`;

  return (
    <>
      <Gnb />
      <S.Wrapper>
        {tradeInfo && (
          <Product
            postId={postId}
            img={tradeInfo.img ? tradeInfo.img : alt}
            title={tradeInfo.title}
            neighbor={tradeInfo.neighbor}
            neighborId={tradeInfo.neighborId}
          />
        )}
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
