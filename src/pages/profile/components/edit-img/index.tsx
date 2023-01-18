import { ChangeEvent, useCallback, useRef, useState } from 'react';
import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';

import * as S from './edit-img.styled';
import defaultImg from '../../../../assets/default-profile.png';
import { ReactComponent as CameraIcon } from '../../../../assets/camera.svg';

interface EditImgProps {
  edit: EditType;
  img: string | null;
  handleClose: SetEditType;
}

const EditImg = ({ img, edit, handleClose }: EditImgProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [currImg, setCurrImg] = useState<string | null>(img);

  // TODO: 토큰 가져오기 (with useSelector)

  const handleSaveImg = useCallback(() => {
    // TODO: 파일 업로드 부분으로 변경
    if (imgRef && imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ({ target }) => {
        // DESC: [type] string | null 좁히기
        if (typeof target?.result !== 'object') {
          setCurrImg(target ? target.result : img);
        }
      };
    }
  }, []);

  const handleSubmit = useCallback(() => {
    // TODO: userInfo validation
    // TODO: username 수정부분과 img 수정 부분 뜯어질 예정
  }, [currImg]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.ImagePositionWrapper>
          <S.Image src={currImg ? currImg : defaultImg} alt="default" />
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
