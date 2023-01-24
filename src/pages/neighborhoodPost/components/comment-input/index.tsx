import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { requestPostNeighborhoodComment } from '../../../../api/neighborhood';
import { useAppSelector } from '../../../../store/hooks';
import * as S from './comment-input.styled';

interface CommentInputProps {
  postId: number;
  refreshPost: () => void;
}

export const CommentInput = ({ postId, refreshPost }: CommentInputProps) => {
  const { accessToken } = useAppSelector(state => state.session);
  const [input, setInput] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (accessToken) {
      requestPostNeighborhoodComment(
        postId,
        { comment: input, isHidden: false },
        accessToken,
      );
      toast('댓글을 등록하였습니다.');
      setInput('');
      refreshPost();
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
