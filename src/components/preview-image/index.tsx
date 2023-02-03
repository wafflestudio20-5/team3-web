import * as S from './preview-image.styled';
import deleteIcon from '../../assets/delete.svg';
import defaultImg from '../../assets/default-product.svg';

interface PreviewImageProps {
  img?: string | object | null;
  order?: number;
  handleDelete?: () => void;
}

const PreviewImage = ({ img, order, handleDelete }: PreviewImageProps) => {
  return (
    <S.PositionWrapper>
      <S.Wrapper>
        {order === 0 && <S.Representive>대표 사진</S.Representive>}
        <S.Img src={typeof img === 'string' ? img : defaultImg} alt="preview" />
        <S.Delete onClick={handleDelete}>
          <S.Icon src={deleteIcon || defaultImg} alt="delete" />
        </S.Delete>
      </S.Wrapper>
    </S.PositionWrapper>
  );
};

export default PreviewImage;
