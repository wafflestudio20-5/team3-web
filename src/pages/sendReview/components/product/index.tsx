import * as S from './product.styled';

const Product = () => {
  return (
    <S.Wrapper>
      <S.Img />
      <S.Info>
        <S.Title>징거버거 와플</S.Title>
        <S.Neighbor>거래한 이웃: 자흔</S.Neighbor>
      </S.Info>
    </S.Wrapper>
  );
};

export default Product;
