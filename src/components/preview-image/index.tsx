import * as S from './preview-image.styled';
import deleteIcon from '../../assets/delete.svg';
import defaultImg from '../../assets/default-product.svg';

interface PreviewImageProps {
  img?: string | null;
  handleDelete?: () => void;
}

const PreviewImage = ({ img, handleDelete }: PreviewImageProps) => {
  return (
    <S.PositionWrapper>
      <S.Wrapper>
        <S.Img src={img || defaultImg} alt="preview" />
        <S.Delete onClick={handleDelete}>
          <S.Icon src={deleteIcon || defaultImg} alt="delete" />
        </S.Delete>
      </S.Wrapper>
    </S.PositionWrapper>
  );
};

export default PreviewImage;
