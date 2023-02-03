import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  requestNeighborhoodPost,
  requestPostNeighborhoodComment,
} from '../../../../api/neighborhood';
import { loadItem } from '../../../../utils/storage';
import { normalToast } from '../../../../utils/basic-toast-modal';
import useThrottle from '../../../../hooks/useThrottle';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  addComment,
  setComments,
} from '../../../../store/slices/neighborhoodSlice';
import * as S from './comment-input.styled';
import { setPost } from '../../../../store/slices/neighborhoodPostSlice';

interface CommentInputProps {
  postId: number;
  refreshPost: () => void;
}

export const CommentInput = ({ postId, refreshPost }: CommentInputProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(state => state.comments);
  const accessToken = loadItem('accessToken');
  const { isDisabled, throttle } = useThrottle(1000);
  const [input, setInput] = useState('');
  const handleSubmit = async () => {
    if (!input.trim()) {
      normalToast('댓글에는 내용이 있어야 합니다.');
      setInput('');
      return;
    }

    if (accessToken) {
      await requestPostNeighborhoodComment(
        postId,
        { comment: input, isHidden: false },
        accessToken,
      ).then(async () => {
        toast('댓글을 등록하였습니다.');
        const res = (await requestNeighborhoodPost(postId, accessToken)) as any;
        dispatch(setComments(res.data.comments));
        dispatch(setPost(res.data));
        setInput('');
        // navigate(-1);
      });
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Label htmlFor="comment">댓글</S.Label>
        <S.Input
          id="comment"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          placeholder="댓글을 입력해주세요."
        />
        <S.Button
          onClick={e => {
            e.preventDefault();
            throttle(handleSubmit);
          }}
        >
          등록
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
