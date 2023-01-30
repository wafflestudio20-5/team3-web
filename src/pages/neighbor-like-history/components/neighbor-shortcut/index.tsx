import * as S from './shortcut.styled';

import LikeIcon from '../../../../assets/like-blank.svg';
import CommentIcon from '../../../../assets/neighbor-comment-icon.svg';
import { useNavigate } from 'react-router-dom';
import { shortenLocation } from '../../../../utils/location';
import moment from 'moment';

interface ShortCutProps {
  id: number;
  content: string;
  location?: string;
  modifiedAt: Date;
  likeCount?: number;
  commentCount?: number;
}

// TODO: id(key props), handleClick 구현
export const ShortCut = ({
  id,
  content,
  location = '',
  modifiedAt,
  likeCount = 0,
  commentCount = 0,
}: ShortCutProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(id);
    navigate(`/neighborhood/${id}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.TopWrapper>
        <S.Location>{shortenLocation(location)}</S.Location>
        <S.Location>
          {moment(new Date(modifiedAt).getTime()).fromNow()}
        </S.Location>
      </S.TopWrapper>
      <S.ContentP>{content}</S.ContentP>

      <S.FooterWrapper>
        <S.Location></S.Location>

        <S.IconsContainer>
          {likeCount > 0 && (
            <S.ImgWrapper>
              <S.IconImg src={LikeIcon} />
              <S.CountSpan>{likeCount}</S.CountSpan>
            </S.ImgWrapper>
          )}
          {commentCount > 0 && (
            <S.ImgWrapper>
              <S.IconImg src={CommentIcon} />
              <S.CountSpan>{commentCount}</S.CountSpan>
            </S.ImgWrapper>
          )}
        </S.IconsContainer>
      </S.FooterWrapper>
    </S.Container>
  );
};
