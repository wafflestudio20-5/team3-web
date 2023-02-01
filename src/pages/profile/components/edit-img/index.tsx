import { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { postImg } from '../../../../store/slices/usersSlice';
import { SetEditType, EditType } from '../../../../types/users';
import { normalToast } from '../../../../utils/basic-toast-modal';
import { loadItem } from '../../../../utils/storage';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import ButtonMd from '../button-md';
import * as S from './edit-img.styled';
import defaultImg from '../../../../assets/default-profile.png';
import { ReactComponent as CameraIcon } from '../../../../assets/modifycamera.svg';

interface EditImgProps {
  edit: EditType;
  img: string | null;
  handleClose: SetEditType;
}

const EditImg = ({ img, edit, handleClose }: EditImgProps) => {
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');

  const imgRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(img);
  const [imgFile, setImgFile] = useState<string | Blob>('');

  const handleSaveImg = () => {
    if (imgRef && imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      setImgFile(imgRef.current.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ({ target }) => {
        // DESC: [type] string | null 좁히기
        if (typeof target?.result !== 'object') {
          setPreview(target ? target.result : img);
        }
      };
    }
  };

  const handleSubmit = useCallback(() => {
    if (!imgFile) {
      normalToast('새로운 이미지 파일을 등록해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('image', imgFile);
    if (accessToken) {
      dispatch(postImg({ accessToken, formData }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, img: false });
          toast.success('프로필 이미지가 변경되었습니다.');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            normalToast(err.response?.data.error);
          }
        });
    }
  }, [preview]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.ImagePositionWrapper>
          <S.Image src={preview || defaultImg} alt="default" />
          <S.ImageInput
            ref={imgRef}
            type="file"
            id="profileImg"
            accept="image/*"
            onChange={handleSaveImg}
          />
          <S.Label htmlFor="profileImg">
            <S.IconWrapper>
              <S.IconInnerWrapper>
                <CameraIcon />
              </S.IconInnerWrapper>
            </S.IconWrapper>
          </S.Label>
        </S.ImagePositionWrapper>
      </S.InputWrapper>

      <S.ButtonWrapper>
        <ButtonMd
          text="취소"
          handleClick={() => handleClose({ ...edit, img: false })}
        />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditImg;
