import ButtonMd from '../../components/button-md';
import ProfileImage from '../../components/profile-image';

import { User } from '../../../../types/users';

import * as S from './user-info.styled';
import addIcon from '../../../../assets/add-icon.svg';
import EditMdIcon from '../../../../assets/edit-middle-icon.svg';
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

            <S.ButtonWrapper>
              <ButtonMd
                img={addIcon}
                text={'거래후기 작성'}
                handleClick={() => alert('거래후기 남기기')}
              />
              <ButtonMd
                img={EditMdIcon}
                text={'매너평가 작성'}
                handleClick={() => alert('매너평가 남기기')}
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
    </S.Wrapper>
  );
};

export default UserInfo;
