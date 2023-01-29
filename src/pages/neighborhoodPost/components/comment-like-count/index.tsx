import * as S from './comment-like-count.style';
import likeBlank from '../../../../assets/like-blank.svg';
import likeFill from '../../../../assets/like-fill.svg';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { useEffect, useState } from 'react';
import {
  requestNeighborhoodPost,
  requestPostNeighborhood,
  requestPostNeighborhoodLike,
} from '../../../../api/neighborhood';
import { setPost } from '../../../../store/slices/neighborhoodPostSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

interface CommentLikeCountProps {
  // isLiked: boolean;
  postId: number;
  // commentCount: number;
  // likeCount: number;
}

export const CommentLikeCount = ({
  // isLiked,
  postId,
}: // commentCount,
// likeCount,
CommentLikeCountProps) => {
  const dispatch = useAppDispatch();
  const { isLiked, likeCount, commentCount } = useAppSelector(
    state => state.neighborhoodPost,
  );
  const { accessToken } = useAppSelector(state => state.session);

  const [likeIcon, setLikeIcon] = useState(likeBlank);
  useEffect(() => {
    if (isLiked) {
      setLikeIcon(likeFill);
    } else {
      setLikeIcon(likeBlank);
    }
  }, [isLiked]);

  const handleLikeButtonClicked = () => {
    if (accessToken) {
      requestPostNeighborhoodLike(postId, accessToken).then(async () => {
        const res = (await requestNeighborhoodPost(postId, accessToken)) as any;
        // console.log(res);
        // TODO: response로 온 post 데이터 받아 post 업데이트
        dispatch(setPost(res.data));
      });
    }
  };
  return (
    <S.Wrapper>
      <S.Text>댓글 {commentCount}</S.Text>
      <S.IconImg src={likeIcon} onClick={handleLikeButtonClicked} />
      <S.Text>{likeCount}</S.Text>
    </S.Wrapper>
  );
};
