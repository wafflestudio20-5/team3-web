import { useCallback, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';
import { toast } from 'react-toastify';

import ButtonMd from '../button-md';
import { normalToast } from '../../../../utils/basic-toast-modal';

import { Coordinate } from '../../../../types/auth';
import { getCoordinate } from '../../../../utils/map';
import { SetEditType, EditType } from '../../../../types/users';
import { postLocation } from '../../../../store/slices/usersSlice';
import { loadItem } from '../../../../utils/storage';
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
  const accessToken = loadItem('accessToken');
  const [currLocation, setCurrLocation] = useState(location || '');
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });

  getCoordinate(currLocation, coordinate, setCoordinate);

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
      dispatch(postLocation({ accessToken, currLocation, coordinate }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, location: false });
          toast.success('성공적으로 변경되었습니다.');
        })
        .catch((err: { response: { data: { error: string } } }) => {
          if (axios.isAxiosError(err)) {
            normalToast(err.response?.data.error);
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
