import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteReview, getReviews } from '../../store/slices/reviewSlice';
import { shortenLocation } from '../../functions/location';
import { redirectWithMsg } from '../../utils/errors';
import Gnb from '../../components/gnb';
import ReviewInfo from './components/review-info';
import { Review } from '../../types/review';
import { Wrapper, Header, List, Message } from './others-review.styled';

const OthersReviewPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const userId = Number(params.id);
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [data, setData] = useState<Review[]>([]);

  // DESC: 다른 사람 프로필에서 내가 쓴 후기에만 삭제 모달을 켤 수 있는 more 버튼이 표시됨
  const checkIsMyReview = (writerId: number) => {
    if (me) {
      if (me.id === writerId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(getReviews(userId))
      .unwrap()
      .then(res => {
        setData(res);
      })
      .catch(err => {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
          } else if (err.response?.status === 401) {
            // TODO: refresh 후 재요청
            redirectWithMsg(2, err.response?.data.error, () =>
              navigate('/login'),
            );
          } else {
            redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
              navigate('/'),
            );
          }
        }
      });
  }, []);

  const removeReview = (reviewId: number) => {
    if (accessToken) {
      dispatch(deleteReview({ accessToken: accessToken, reviewId: reviewId }))
        .unwrap()
        .then(res => {
          console.log(res);
          toast('리뷰가 삭제되었습니다.');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };

  return (
    <>
      <Gnb />
      <Wrapper>
        <Header>받은 후기</Header>
        <List>
          {data.map(review => (
            <ReviewInfo
              key={review.id}
              id={review.id}
              userId={review.user.id}
              img={review.user?.imgUrl ? review.user.imgUrl : '1'}
              username={review.user?.username}
              type={review.type === 'BUYER' ? '구매자' : '판매자'}
              location={shortenLocation(review.user.location)}
              createdAt={review.createdAt}
              content={review.content}
              isMyReview={checkIsMyReview(review.user.id)}
              removeReview={removeReview}
            />
          ))}
          {!data[0] && <Message>아직 리뷰가 없습니다</Message>}
        </List>
      </Wrapper>
    </>
  );
};

export default OthersReviewPage;
