import moment from 'moment';
import * as S from './desc-container.styled';

interface DescriptionProps {
  content: string;
  modifiedAt: Date;
  viewCount: number;
}

export const Description = ({
  content,
  modifiedAt,
  viewCount,
}: DescriptionProps) => {
  return (
    <S.Wrapper>
      <S.DescriptionWrapper>{content}</S.DescriptionWrapper>
      <S.LocationWrapper>{`${moment(
        new Date(),
      ).fromNow()} ∙ 조회 ${viewCount}`}</S.LocationWrapper>
    </S.Wrapper>
  );
};
