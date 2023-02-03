import { useState } from 'react';

import * as S from './styles';
import { useAppSelector } from '../../../../store/hooks';
import defaultImg from '../../../../assets/default-trade-img.svg';

const ImgCarousel = () => {
  const { imageUrls } = useAppSelector(state => state.tradePost);
  const imgCondition = imageUrls && imageUrls.length > 0;
  const [openModal, setOpenModal] = useState(false);
  const [imgSource, setImgSource] = useState('');

  const handleClose = () => {
    setOpenModal(false);
    setImgSource('');
  };

  const handleOpen = (imgUrl: string) => {
    setOpenModal(true);
    setImgSource(imgUrl);
  };

  return (
    <>
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
          imageUrls?.map((url: string) => {
            return (
              <S.ImgItem
                key={url}
                src={url}
                alt="trade"
                onClick={() => handleOpen(url)}
              />
            );
          })
        ) : (
          <S.ImgItem src={defaultImg} alt="trade" />
        )}
      </S.Wrapper>
      {openModal && (
        <>
          <S.Dim onClick={handleClose} />
          <S.ImgOriginal src={imgSource || defaultImg} alt="original" />
        </>
      )}
    </>
  );
};

export default ImgCarousel;
