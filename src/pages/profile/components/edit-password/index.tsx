import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import ButtonMd from '../button-md';
import { normalToast } from '../../../../utils/basic-toast-modal';

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
  const [newPwAnnounce, setNewPwAnnounce] = useState('');
  const [newPwSuccess, setNewPwSuccess] = useState(false);
  const [confirmAnnounce, setconfirmAnnounce] = useState('');
  const [confirmSuccess, setconfirmSuccess] = useState(false);

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
    if (!valPasswordToMsg(values.newPw).success) {
      normalToast('새 비밀번호가 조건에 맞지 않습니다.');
      return;
    }
    if (!confirmPasswordToMsg(values.newPw, values.newPwConfirm).success) {
      normalToast('비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    if (accessToken) {
      dispatch(postPassword({ accessToken, values }))
        .unwrap()
        .then(() => {
          handleClose({ ...edit, password: false });
          toast.success('비밀번호가 변경되었습니다.');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            normalToast(err.response?.data.error);
          }
        });
    }
  }, [values?.pw, values?.newPw, values?.newPwConfirm]);

  useEffect(() => {
    setNewPwAnnounce(valPasswordToMsg(values.newPw).msg);
    setNewPwSuccess(valPasswordToMsg(values.newPw).success);
    setconfirmAnnounce(
      confirmPasswordToMsg(values.newPw, values.newPwConfirm).msg,
    );
    setconfirmSuccess(
      confirmPasswordToMsg(values.newPw, values.newPwConfirm).success,
    );
  }, [values.newPw, values.newPwConfirm]);

  const valPassword = (password: string): boolean => {
    const PASSWORD_REG =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    return PASSWORD_REG.test(password);
  };

  const valPasswordToMsg = (
    password: string,
  ): { msg: string; success: boolean } => {
    if (password === '') {
      return { msg: '', success: false };
    } else if (!valPassword(password)) {
      return {
        msg: '영어, 숫자, 특수문자(!@#$%^&+=)를 모두 포함한 8~20자리 입니다.',
        success: false,
      };
    } else {
      return { msg: '사용 가능한 비밀번호입니다.', success: true };
    }
  };

  const confirmPasswordToMsg = (
    password: string,
    passwordConfirm: string,
  ): { msg: string; success: boolean } => {
    if (passwordConfirm === '') {
      return { msg: '', success: false };
    } else if (password === passwordConfirm) {
      return { msg: '비밀번호가 일치합니다.', success: true };
    } else {
      return { msg: '비밀번호가 일치하지 않습니다.', success: false };
    }
  };

  return (
    <S.Wrapper>
      <S.Label>* 현재 비밀번호</S.Label>
      <S.InputWrapper>
        <S.Input
          required
          name="pw"
          value={values?.pw}
          type="password"
          onChange={handleChange}
          placeholder="현재 비밀번호를 입력해주세요."
        />
      </S.InputWrapper>

      <S.Label>* 새 비밀번호</S.Label>
      <S.InputWrapper>
        <S.Input
          required
          name="newPw"
          value={values?.newPw}
          type="password"
          onChange={handleChange}
          placeholder="새 비밀번호를 입력해주세요."
        />
        <S.Announce color={newPwSuccess ? '#219ED3' : '#d94d11'}>
          {newPwAnnounce}
        </S.Announce>
      </S.InputWrapper>

      <S.Label>* 새 비밀번호 확인</S.Label>
      <S.InputWrapper>
        <S.Input
          required
          name="newPwConfirm"
          value={values?.newPwConfirm}
          type="password"
          onChange={handleChange}
          placeholder="새 비밀번호를 확인해주세요."
        />
        <S.Announce color={confirmSuccess ? '#219ED3' : '#d94d11'}>
          {confirmAnnounce}
        </S.Announce>
      </S.InputWrapper>

      <S.ButtonWrapper>
        <ButtonMd
          text="취소"
          handleClick={() => handleClose({ ...edit, password: false })}
        />
        <ButtonMd text="변경" handleClick={handleSubmit} />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default EditPassword;
