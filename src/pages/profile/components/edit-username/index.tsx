import { ChangeEvent, useCallback, useState } from 'react';
import ButtonMd from '../button-md';
import { SetEditType, EditType } from '../../../../types/users';

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
  const [currUsername, setCurrUsername] = useState(username);

  // TODO: 토큰 가져오기 (with useSelector)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrUsername(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    // TODO: userInfo validation
    // TODO: username 수정부분과 img 수정 부분 뜯어질 예정
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
