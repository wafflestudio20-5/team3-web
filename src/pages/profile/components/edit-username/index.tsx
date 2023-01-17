import { ChangeEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';
import { postUsername } from '../../../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './edit-username.styled';
import defaultImg from '../../../../assets/default-profile.png';


interface EditUsernameProps {
  img: string | null;
  username: string | null;
  edit: EditType;
  handleClose: SetEditType;
}

const EditUsername = ({
  img,
  username,
  edit,
  handleClose,
}: EditUsernameProps) => {
  const dispatch = useAppDispatch();
  const [currUsername, setCurrUsername] = useState(username);
  const { accessToken } = useAppSelector(state => state.session);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrUsername(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (accessToken) {
      dispatch(postUsername({ accessToken, currUsername }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, username: false });
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
  }, [currUsername]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Image src={img || defaultImg} alt="default" />
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

export default EditUsername;
