import moment from 'moment';
import * as S from './desc-container.styled';

interface DescriptionProps {
  title: string;
  content: string;
  modifiedAt: Date;
  viewCount: number;
}

export const Description = ({
  title,
  content,
  modifiedAt,
  viewCount,
}: DescriptionProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.DescriptionWrapper>{content}</S.DescriptionWrapper>
      <S.LocationWrapper>{`${moment(
        modifiedAt,
      ).fromNow()} ∙ 조회 ${viewCount}`}</S.LocationWrapper>
    </S.Wrapper>
  );
};
