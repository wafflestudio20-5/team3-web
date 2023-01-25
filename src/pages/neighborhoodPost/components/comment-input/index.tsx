import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  requestNeighborhoodPost,
  requestPostNeighborhoodComment,
} from '../../../../api/neighborhood';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  addComment,
  setComments,
} from '../../../../store/slices/neighborhoodSlice';
import * as S from './comment-input.styled';

interface CommentInputProps {
  postId: number;
  refreshPost: () => void;
}

export const CommentInput = ({ postId, refreshPost }: CommentInputProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(state => state.comments);
  const { accessToken } = useAppSelector(state => state.session);
  const [input, setInput] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (accessToken) {
      await requestPostNeighborhoodComment(
        postId,
        { comment: input, isHidden: false },
        accessToken,
      ).then(async () => {
        toast('댓글을 등록하였습니다.');
        // 원래는 refreshPost() 로 post 정보를 다시 받아오고 싶었는데.. auth/refresh 403 에러
        // TODO: 뒤로 가지 않고 바로 작성한 댓글 보여주기
        const res = (await requestNeighborhoodPost(postId, accessToken)) as any;
        dispatch(setComments(res.data.comments));
        setInput('');
        // navigate(-1);
      });
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="comment">댓글</S.Label>
        <S.Input
          id="comment"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          placeholder="댓글을 입력해주세요."
        />
        <S.Button>등록</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
