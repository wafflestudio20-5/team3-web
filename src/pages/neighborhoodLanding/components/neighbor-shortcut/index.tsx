import * as S from './shortcut.styled';
import { ReactComponent as LikeIcon } from '../../../../assets/like-icon.svg';

interface ShortCutProps {
  id?: number;
  content: string;
  location?: string;
  likeCount?: number;
}

// TODO: id(key props), handleClick 구현
export const ShortCut = ({
  id = 0,
  content,
  location = '',
  likeCount = 0,
}: ShortCutProps) => {
  return (
    <S.Container>
      <S.ContentP>{content}</S.ContentP>

      <S.FooterWrapper>
        <S.Location>{location}</S.Location>
        {likeCount > 0 ? (
          <>
            <S.LikeIconWrapper>
              <LikeIcon />
              <S.LikeSpan>{likeCount}</S.LikeSpan>
            </S.LikeIconWrapper>
          </>
        ) : null}
      </S.FooterWrapper>
    </S.Container>
  );
};
