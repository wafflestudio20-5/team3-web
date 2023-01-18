import * as S from './comment-like-count.style';
import LikeIcon from '../../../../assets/like-icon.svg';

interface CommentLikeCountProps {
  commentCount: number;
  likeCount: number;
}

export const CommentLikeCount = ({
  commentCount,
  likeCount,
}: CommentLikeCountProps) => {
  return (
    <S.Wrapper>
      <S.Text>댓글 {commentCount}</S.Text>
      <S.IconImg src={LikeIcon} />
      <S.Text>{likeCount}</S.Text>
    </S.Wrapper>
  );
};
