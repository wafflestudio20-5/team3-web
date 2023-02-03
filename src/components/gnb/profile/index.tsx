import { useEffect, useState } from 'react';
import * as S from './profile.styled';
import { User } from '../../../types/users';
import defaultImg from '../../../assets/default-profile.png';

interface ProfileProps {
  user?: User | null;
}

const Profile = ({ user }: ProfileProps) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();

  useEffect(() => {
    setUsername(user?.username || '익명');
    setImgUrl(user?.imgUrl || defaultImg);
    setUserEmail(user?.email || '로그인이 필요합니다.');
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
