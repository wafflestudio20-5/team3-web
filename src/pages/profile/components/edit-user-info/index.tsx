import { ChangeEvent, useCallback, useRef, useState } from 'react';

import ButtonMd from '../button-md';

import { requestUpdateMyInfo } from '../../../../api/users';

import * as S from './edit-user-info.styled';
import defaultImg from '../../../../assets/default-profile.png';
import { ReactComponent as CameraIcon } from '../../../../assets/camera.svg';

// DESC: null 관리 -> 상위 컴포넌트에서
interface EditUserInfoProps {
  img: string | null;
  username: string | null;
  location: string | null;
  handleClose: (set: boolean) => void;
}

const EditUserInfo = ({
  img,
  username,
  location,
  handleClose,
}: EditUserInfoProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [currImg, setCurrImg] = useState<string | null>(img);
  const [currUsername, setCurrUsername] = useState(username);

  // TODO: 토큰 가져오기 (with useSelector)
  const accessToken = 'sampleToken';

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrUsername(e.target.value);
  }, []);

  const handleSaveImg = useCallback(() => {
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

    // TODO: 요청시 담아서 보냄
    // TODO: /users/me PATCH API 호출
    (async () => {
      const res = await requestUpdateMyInfo(
        accessToken,
        currUsername,
        location,
        currImg,
      );
      if (res) {
        // TODO: 요청 성공시 false
        handleClose(false);
      }
    })();
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
        <ButtonMd text="취소" handleClick={() => handleClose(false)} />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditUserInfo;
