import * as S from './styles';
import { useAppSelector } from '../../../../store/hooks';
import defaultImg from '../../../../assets/default-trade-img.svg';

const ImgCarousel = () => {
  const { imageUrls } = useAppSelector(state => state.tradePost);
  const imgCondition = imageUrls && imageUrls.length > 0;

  return (
    <S.Wrapper
      animation="slide"
      swipe={true}
      navButtonsAlwaysVisible={imgCondition}
      indicatorIconButtonProps={{
        style: {
          padding: '1px',
          width: '14px',
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: '#4747473d',
          borderRadius: '50%',
        },
      }}
      fullHeightHover={false}
    >
      {imgCondition ? (
        imageUrls.map((url: string) => {
          return <S.ImgItem key={url} src={url} alt="trade" />;
        })
      ) : (
        <S.ImgItem src={defaultImg} alt="trade" />
      )}
    </S.Wrapper>
  );
};

export default ImgCarousel;
