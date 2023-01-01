import { ChangeEvent, useCallback, useState } from 'react';

import ButtonMd from '../button-md';
import * as S from './edit-password.styled';

interface EditPasswordProps {
  handleClose: (set: boolean) => void;
}

const EditPassword = ({ handleClose }: EditPasswordProps) => {
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
    console.log(
      '비밀번호 요청',
      values?.pw,
      values?.newPw,
      values?.newPwConfirm,
    );
    // TODO: newPw와 newPwConfirm 검증
    // TODO: 요청시에는 values에 있는거 담아서 보냄
    // TODO: PUT /users/me/password

    // TODO: 요청 성공시 false
    handleClose(false);
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
        <ButtonMd text="취소" handleClick={() => handleClose(false)} />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditPassword;
