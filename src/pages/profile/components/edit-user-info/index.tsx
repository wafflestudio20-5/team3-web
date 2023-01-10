import { ChangeEvent, useCallback, useRef, useState } from 'react';
import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';

import * as S from './edit-user-info.styled';
import defaultImg from '../../../../assets/default-profile.png';
import { ReactComponent as CameraIcon } from '../../../../assets/camera.svg';

// TODO: 토큰 가져오기 (with useSelector)
import { accessToken } from '../../../../constant';

interface EditUserInfoProps {
  img: string | null;
  username: string | null;
  edit: EditType;
  handleClose: SetEditType;
}

const EditUserInfo = ({
  img,
  username,
  edit,
  handleClose,
}: EditUserInfoProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [currImg, setCurrImg] = useState<string | null>(img);
  const [currUsername, setCurrUsername] = useState(username);

  // TODO: 토큰 가져오기 (with useSelector)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrUsername(e.target.value);
  }, []);

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
  }, [currUsername, currImg]);

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
        <S.Input value={currUsername || ''} onChange={handleChange} />
      </S.InputWrapper>

      <S.ButtonWrapper>
        <ButtonMd
          text="취소"
          handleClick={() => handleClose({ ...edit, username: false })}
        />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditUserInfo;
