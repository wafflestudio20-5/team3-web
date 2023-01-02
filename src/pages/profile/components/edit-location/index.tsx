import { ChangeEvent, useCallback, useState } from 'react';

import ButtonMd from '../button-md';

import * as S from './edit-location.styled';

// DESC: null 관리 -> 상위 컴포넌트에서
interface EditLocationProps {
  img: string | null;
  username: string;
  location: string;
  handleClose: (set: boolean) => void;
}

const EditLocation = ({
  img,
  username,
  location,
  handleClose,
}: EditLocationProps) => {
  const [currLocation, setCurrLocation] = useState(location);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrLocation(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('유저정보 수정 요청', img, username, currLocation);
    // TODO: 요청시 담아서 보냄
    // TODO: /users/me PATCH API 호출

    // TODO: 요청 성공시 false
    handleClose(false);
  }, [currLocation]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input value={currLocation} onChange={handleChange} />
        <S.SearchButton onClick={() => alert('카카오 주소검색 활용')}>
          주소 검색
        </S.SearchButton>
      </S.InputWrapper>

      <S.ButtonWrapper>
        <ButtonMd text="취소" handleClick={() => handleClose(false)} />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditLocation;
