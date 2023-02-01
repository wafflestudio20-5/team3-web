import { useRef, useState } from 'react';

import * as S from './upload-image.styled';
import PreviewImage from '../preview-image';
import camera from '../../assets/camera.svg';
import loading from '../../assets/loading-spin.gif';
import { toast } from 'react-toastify';

interface UploadImageProps {
  imgObject: any[];
  setImgObject: any;
}

const UploadImage = ({ imgObject, setImgObject }: UploadImageProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [imgId, setImgId] = useState(imgObject.length);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [previews, setPreviews] = useState<any[]>(imgObject);

  const handleSaveImg = () => {
    if (imgObject.length >= 5) {
      toast.warn('이미지는 5장까지 등록 가능합니다.');
      return;
    }

    setUploadLoading(true);
    if (imgRef && imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ({ target }) => {
        // DESC: [type] string | null 좁히기
        if (typeof target?.result !== 'object') {
          setImgObject([...imgObject, { id: imgId, img: file }]);
          setPreviews([...previews, { id: imgId, img: target?.result }]);
          setUploadLoading(false);
        }
      };
      setImgId(imgId + 1);
    }
  };

  const handleDeleteImg = async (id: number) => {
    const newPreviews = previews.filter(elem => {
      return elem?.id !== id;
    });
    setPreviews(newPreviews);
    const newImgObject = imgObject.filter(elem => {
      return elem?.id !== id;
    });
    setImgObject(newImgObject);
  };

  return (
    <S.Wrapper>
      {!uploadLoading ? (
        <>
          <S.Label htmlFor="profileImg">
            <S.Camera src={camera} alt="camera" />
            <S.ImgCount>{`${imgObject ? imgObject.length : 0}/5`}</S.ImgCount>
            <S.ImageInput
              ref={imgRef}
              type="file"
              id="profileImg"
              accept="image/*"
              onChange={handleSaveImg}
            />
          </S.Label>
          {previews &&
            previews.length > 0 &&
            previews.map((elem, index) => {
              return (
                <PreviewImage
                  key={elem?.id}
                  order={index}
                  img={elem?.img || ''}
                  handleDelete={() => handleDeleteImg(elem?.id)}
                />
              );
            })}
        </>
      ) : (
        <S.SpinnerWrapper>
          <S.Spinner src={loading} alt="loading..." />
        </S.SpinnerWrapper>
      )}
    </S.Wrapper>
  );
};

export default UploadImage;
