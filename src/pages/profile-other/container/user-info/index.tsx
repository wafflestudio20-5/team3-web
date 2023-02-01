import ProfileImage from '../../components/profile-image';

import { User } from '../../../../types/users';
import * as S from './user-info.styled';
import { ReactComponent as UserInfoIcon } from '../../../../assets/userinfo-icon.svg';

interface UserInfoProps {
  me: User | null;
  isLoading: boolean;
}

const UserInfo = ({ me, isLoading }: UserInfoProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <UserInfoIcon />
        <S.Title>User Info</S.Title>
      </S.Header>
      <>
        {!isLoading ? (
          <>
            <ProfileImage
              profileImg={me?.imgUrl || null}
              temperature={me?.temperature || null}
            />

            <S.NameInfoWrapper>
              <S.Username>{me?.username || null}</S.Username>
              <S.Email>{me?.email || null}</S.Email>
            </S.NameInfoWrapper>
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
    </S.Wrapper>
  );
};

export default UserInfo;
