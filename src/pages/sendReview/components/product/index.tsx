import * as S from './product.styled';

interface Product {
  img: string;
  title: string;
  neighbor: string;
}

const Product = ({ img, title, neighbor }: Product) => {
  return (
    <S.Wrapper>
      <S.Img src={img} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Neighbor>거래한 이웃: {neighbor}</S.Neighbor>
      </S.Info>
    </S.Wrapper>
  );
};

export default Product;
