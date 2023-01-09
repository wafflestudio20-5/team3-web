import { useCallback, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';

import ButtonMd from '../button-md';

import { useAppDispatch } from '../../../../store/hooks';
import { postLocation } from '../../../../store/slices/usersSlice';
import { SetEditType, EditType } from '../../../../types/users';

import * as S from './edit-location.styled';

// TODO: 토큰 가져오기 (with useSelector)
import { accessToken } from '../../../../constant';

interface EditLocationProps {
  edit: EditType;
  location: string | null;
  handleClose: SetEditType;
}

const EditLocation = ({ edit, location, handleClose }: EditLocationProps) => {
  const dispatch = useAppDispatch();
  const open = useDaumPostcodePopup();
  const [currLocation, setCurrLocation] = useState(location || '');

  const handleComplete = (data: any) => {
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    setCurrLocation(userAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleSubmit = useCallback(() => {
    // DESC: API 호출 후 dispatch
    dispatch(postLocation({ accessToken, currLocation }))
      .unwrap()
      .then(() => {
        handleClose({ ...edit, location: false });
      })
      .catch(err => {
        // TODO: 컴포넌트단에서 케이스별 에러처리
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            console.log(err.response?.data.error);
            // alert 후 로그인 페이지로 redirect
          }
          // ...
        }
      });
  }, [currLocation]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input value={currLocation} readOnly />
        <S.SearchButton onClick={handleClick}>주소 검색</S.SearchButton>
      </S.InputWrapper>

      <S.ButtonWrapper>
        <ButtonMd
          text="취소"
          handleClick={() => handleClose({ ...edit, location: false })}
        />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditLocation;
