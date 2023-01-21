import { Link } from 'react-router-dom';
import * as S from './product.styled';
import carrot from '../../../../assets/carrot.svg';

interface Product {
  postId: number;
  img: string;
  title: string;
  neighbor: string;
  neighborId: number;
}

const Product = ({ postId, img, title, neighbor, neighborId }: Product) => {
  return (
    <S.Wrapper>
      <Link to={`/tradepost/${postId}`}>
        <S.Img
          src={img}
          onError={e => ((e.target as HTMLImageElement).src = carrot)}
        />
      </Link>
      <S.Info>
        <S.Title>{title}</S.Title>
        <Link to={`/profile/${neighborId}`}>
          <S.Neighbor>거래한 이웃: {neighbor}</S.Neighbor>
        </Link>
      </S.Info>
    </S.Wrapper>
  );
};

export default Product;
