import { useEffect, useState } from 'react';
import * as S from './profile.styled';

interface ProfileProps {
  // TODO: 유저 인터페이스 따라 타입 수정하기 user: UserType
  user: boolean;
}

const Profile = ({ user }: ProfileProps) => {
  // TODO: 유저 정보 받아오기
  const [imgUrl, setImgUrl] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();

  // DESC: example data
  useEffect(() => {
    setUsername(user ? 'lerrybe' : '익명');
    setImgUrl(
      user
        ? 'https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg'
        : 'https://startupheretoronto.com/wp-content/uploads/2019/03/default-user-image-2.png',
    );
    setUserEmail(user ? '123456@snu.ac.kr' : '로그인이 필요합니다.');
  }, [user]);

  return (
    <S.Wrapper>
      <S.ProfileImg src={imgUrl} alt="img" />
      <S.UserWrapper>
        <S.Username>{username}</S.Username>
        <S.UserEmail>{userEmail}</S.UserEmail>
      </S.UserWrapper>
    </S.Wrapper>
  );
};

export default Profile;
