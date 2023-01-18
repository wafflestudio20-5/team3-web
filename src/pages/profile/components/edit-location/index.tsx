import { useCallback, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { toast } from 'react-toastify';
import axios from 'axios';

import ButtonMd from '../button-md';

import { SetEditType, EditType } from '../../../../types/users';
import { postLocation } from '../../../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './edit-location.styled';

interface EditLocationProps {
  edit: EditType;
  location: string | null;
  handleClose: SetEditType;
}

const EditLocation = ({ edit, location, handleClose }: EditLocationProps) => {
  const dispatch = useAppDispatch();
  const open = useDaumPostcodePopup();
  const { accessToken } = useAppSelector(state => state.session);
  const [currLocation, setCurrLocation] = useState(location || '');

  const handleComplete = (data: any) => {
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    setCurrLocation(userAddress);
  };

  const handleClick = useCallback(() => {
    open({ onComplete: handleComplete });
  }, [open, handleComplete]);

  const handleSubmit = useCallback(() => {
    if (accessToken) {
      dispatch(postLocation({ accessToken, currLocation }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, location: false });
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            toast(`🥕 ${err.response?.data.error}`, {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
        });
    }
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
