import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { normalToast } from '../../utils/basic-toast-modal';
import { useAuth } from '../../hooks/useAuth';
import Spinner from '../../components/spinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteReview, getReviews } from '../../store/slices/reviewSlice';
import { shortenLocation } from '../../utils/location';
import { redirectWithMsg } from '../../utils/errors';
import Gnb from '../../components/gnb';
import ReviewInfo from './components/review-info';
import { Review } from '../../types/review';
import { Wrapper, Header, List, Message } from './my-review.styled';

const MyReviewPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const userId = me?.id;
  const [data, setData] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (userId) {
      dispatch(getReviews(userId))
        .unwrap()
        .then(res => {
          setData(res);
          setIsLoading(false);
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
  }, [accessToken, me]);

  const removeReview = (reviewId: number) => {
    if (accessToken) {
      dispatch(deleteReview({ accessToken: accessToken, reviewId: reviewId }))
        .unwrap()
        .then(res => {
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

  const { sessionLoading, isAuthed } = useAuth();

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('로그인이 필요합니다.');
  }

  if (sessionLoading || !isAuthed) {
    return <Spinner />;
  }

  return (
    <>
      <Gnb />
      <Wrapper>
        <Header>받은 후기</Header>
        {isLoading && <Spinner />}
        {!isLoading && (
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
                removeReview={removeReview}
              />
            ))}
            {!data[0] && <Message>아직 리뷰가 없습니다</Message>}
          </List>
        )}
      </Wrapper>
    </>
  );
};

export default MyReviewPage;
