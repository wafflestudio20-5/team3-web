import { ChangeEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';
import { postPassword } from '../../../../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './edit-password.styled';

interface EditPasswordProps {
  edit: EditType;
  handleClose: SetEditType;
}

const EditPassword = ({ edit, handleClose }: EditPasswordProps) => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);

  const [values, setValues] = useState({
    pw: '',
    newPw: '',
    newPwConfirm: '',
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values?.pw, values?.newPw, values?.newPwConfirm],
  );

  const handleSubmit = useCallback(() => {
    if (accessToken) {
      dispatch(postPassword({ accessToken, values }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, password: false });
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
  }, [values?.pw, values?.newPw, values?.newPwConfirm]);

  return (
    <S.Wrapper>
      <S.Label>* 현재 비밀번호</S.Label>
      <S.Input
        required
        name="pw"
        value={values?.pw}
        type="password"
        onChange={handleChange}
        placeholder="현재 비밀번호를 입력해주세요."
      />
      <S.Label>* 새 비밀번호</S.Label>
      <S.Input
        required
        name="newPw"
        value={values?.newPw}
        type="password"
        onChange={handleChange}
        placeholder="새 비밀번호를 입력해주세요."
      />
      <S.Label>* 새 비밀번호 확인</S.Label>
      <S.Input
        required
        name="newPwConfirm"
        value={values?.newPwConfirm}
        type="password"
        onChange={handleChange}
        placeholder="새 비밀번호를 확인해주세요."
      />

      <S.ButtonWrapper>
        <ButtonMd text="취소" handleClick={() => handleClose({ ...edit, password: false })} />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditPassword;
