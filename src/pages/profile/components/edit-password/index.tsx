import { ChangeEvent, useCallback, useState } from 'react';

import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';

import * as S from './edit-password.styled';

import { accessToken } from '../../../../constant';

interface EditPasswordProps {
  edit: EditType;
  handleClose: SetEditType;
}

const EditPassword = ({ edit, handleClose }: EditPasswordProps) => {
  const [values, setValues] = useState({
    pw: '',
    newPw: '',
    newPwConfirm: '',
  });

  // TODO: 토큰 가져오기 (with useSelector)

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
    // TODO: newPw와 newPwConfirm 검증
    // TODO: PATCH /users/me/password dispatch

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
