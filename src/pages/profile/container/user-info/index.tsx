import { useEffect, useState } from 'react';

import ButtonMd from '../../components/button-md';
import EditPassword from '../../components/edit-password';
import ProfileImage from '../../components/profile-image';
import EditUserInfo from '../../components/edit-user-info';

import { requestMyInfo } from '../../../../api/users';

import * as S from './user-info.styled';
import addIcon from '../../../../assets/add-icon.svg';
import EditMdIcon from '../../../../assets/edit-middle-icon.svg';
import { ReactComponent as UserInfoIcon } from '../../../../assets/userinfo-icon.svg';

const UserInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [editPassword, setEditPassword] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(false);

  // TODO: 객체 묶기
  const [img, setImg] = useState<string | null>(null);
  const [temp, setTemp] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  // TODO: 토큰 가져오기 (with useSelector)
  const accessToken = 'sampleToken';

  useEffect(() => {
    // TODO: API 호출, GET /users/me
    // TODO: 요청 실패시 에러 처리 (프로필 페이지 접근 X), 에러 처리 쉬운 쪽으로 API 함수 작성
    (async () => {
      const res = await requestMyInfo(accessToken);
      if (res) {
        setImg(res?.data?.img);
        setEmail(res?.data?.email);
        setTemp(res?.data?.temperature);
        setUsername(res?.data?.username);
        setLocation(res?.data?.location);

        setIsLoading(false);
      }
    })();
  }, [editUserInfo, editPassword]);

  return (
    <S.Wrapper>
      <S.Header>
        <UserInfoIcon />
        <S.Title>User Info</S.Title>
      </S.Header>
      {!editUserInfo && !editPassword && (
        <>
          {!isLoading ? (
            <>
              <ProfileImage temperature={temp} profileImg={img} />

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
          ) : (
            <>
              <S.SkeletonImg />
              <S.SkeletonUsername />
              <S.SkeletonEmail />
              <S.SkeletonButton />
            </>
          )}
        </>
      )}
      {editUserInfo && (
        <EditUserInfo
          img={img}
          username={username}
          location={location}
          handleClose={setEditUserInfo}
        />
      )}
      {editPassword && <EditPassword handleClose={setEditPassword} />}
    </S.Wrapper>
  );
};

export default UserInfo;
