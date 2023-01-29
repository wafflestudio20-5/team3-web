import { useRef, useState } from 'react';
import ReactS3Client from 'react-aws-s3-typescript';

import * as S from './upload-image.styled';
import PreviewImage from '../preview-image';
import camera from '../../assets/camera.svg';
import loading from '../../assets/loading-spin.gif';

interface UploadImageProps {
  imgs: any[];
  setImgs: any;
}

const UploadImage = ({ imgs, setImgs }: UploadImageProps) => {
  const s3Config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME || '',
    region: process.env.REACT_APP_AWS_REGION || '',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY || '',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY || '',
  };

  // 이미지 업로드에 따른 모달 띄우기
  const [uploadLoading, setUploadLoading] = useState(false);
  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleSaveImg = async () => {
    if (imgs.length >= 5) {
      // toast 이미지는 최대 5장 등록 가능합니다. 
      return;
    }
    if (imgs.length < 5) {
      setUploadLoading(true);
      if (imgRef && imgRef.current && imgRef.current.files) {
        const file = imgRef.current.files[0];
        const s3 = new ReactS3Client(s3Config);
        try {
          /* {
           *   Response: {
           *     bucket: "bucket-name",
           *     key: "directory-name/filename-to-be-uploaded",
           *     location: "https:/your-aws-s3-bucket-url/directory-name/filename-to-be-uploaded"
           *   }
           * }
           */
          const res = await s3.uploadFile(file);
          // console.log(res);
          setImgs([...imgs, res.location]);
          setUploadLoading(false);
        } catch (err) {
          console.log(err);
          setUploadLoading(false);
          // toastify
        }
      }
    }
  };

  const handleDeleteImg = async (imgUrl: string) => {
    setUploadLoading(true);
    const s3 = new ReactS3Client(s3Config);
    try {
      await s3.deleteFile(imgUrl);
      console.log('File deleted');
      const newImgs = imgs.filter(url => {
        return imgUrl !== url;
      });
      setImgs(newImgs);
      setUploadLoading(false);
    } catch (err) {
      console.log(err);
      setUploadLoading(false);
      // toastify
      /* handle the exception */
    }
  };

  return (
    <S.Wrapper>
      {!uploadLoading ? 
      <>
        <S.Label htmlFor="profileImg">
          <S.Camera src={camera} alt="camera" />
          <S.ImgCount>{`${imgs ? imgs.length : 0}/5`}</S.ImgCount>
          <S.ImageInput
            ref={imgRef}
            type="file"
            id="profileImg"
            accept="image/*"
            onChange={handleSaveImg}
          />
        </S.Label>
        {imgs &&
          imgs.length > 0 &&
          imgs.map(imgUrl => {
            return (
              <PreviewImage
                key={imgUrl}
                img={imgUrl}
                handleDelete={() => handleDeleteImg(imgUrl)}
              />
            );
          })}
        </> 
        : 
        <S.SpinnerWrapper>
          <S.Spinner src={loading} alt="loading..." />
        </S.SpinnerWrapper>
      }
    </S.Wrapper>
  );
};

export default UploadImage;
