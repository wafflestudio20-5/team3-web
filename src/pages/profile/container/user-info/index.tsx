import { useEffect, useState } from 'react';

import ButtonMd from '../../components/button-md';
import EditPassword from '../../components/edit-password';
import ProfileImage from '../../components/profile-image';
import EditUserInfo from '../../components/edit-user-info';

import * as S from './user-info.styled';
import addIcon from '../../../../assets/add-icon.svg';
import EditMdIcon from '../../../../assets/edit-middle-icon.svg';
import { ReactComponent as UserInfoIcon } from '../../../../assets/userinfo-icon.svg';

// TODO: 혹은 위에서 요청받은거 props로 내려받아도 괜찮을 듯
const UserInfo = () => {
  const [editPassword, setEditPassword] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(false);

  // TODO: 유저정보, 추후 데이터 맞춰서 객체로 수정
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // TODO: API 호출 GET /users/me
    // TODO: 요청 실패시 에러 처리 (프로필 페이지 접근 X)
    // TODO: 요청 성공시 데이터 set
    setUsername('lerrybe');
    setEmail('kyewl97@snu.ac.kr');
    console.log('다시 얻어오기');
  }, [editUserInfo]);

  return (
    <S.Wrapper>
      <S.Header>
        <UserInfoIcon />
        <S.Title>User Info</S.Title>
      </S.Header>
      {!editUserInfo && !editPassword && (
        <>
          <ProfileImage temperature={38.5} profileImg={undefined} />

          <S.NameInfoWrapper>
            <S.Username>{username}</S.Username>
            <S.Email>{email}</S.Email>
          </S.NameInfoWrapper>

          <S.ButtonWrapper>
            <ButtonMd
              img={addIcon}
              text={'내 프로필 수정'}
              handleClick={() => setEditUserInfo(true)}
            />
            <ButtonMd
              img={EditMdIcon}
              text={'비밀번호 변경'}
              handleClick={() => setEditPassword(true)}
            />
          </S.ButtonWrapper>
        </>
      )}
      {editUserInfo && (
        <EditUserInfo
          img={null}
          username={'lerrybe'}
          location={'서울 관악구 봉천동'}
          handleClose={setEditUserInfo}
        />
      )}
      {editPassword && <EditPassword handleClose={setEditPassword} />}
    </S.Wrapper>
  );
};

export default UserInfo;
