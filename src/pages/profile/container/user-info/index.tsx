import EditImg from '../../components/edit-img';
import ButtonMd from '../../components/button-md';
import EditPassword from '../../components/edit-password';
import ProfileImage from '../../components/profile-image';
import EditUsername from '../../components/edit-username';

import { EditType, SetEditType, User } from '../../../../types/users';

import * as S from './user-info.styled';
import addIcon from '../../../../assets/add-icon.svg';
import EditMdIcon from '../../../../assets/edit-middle-icon.svg';
import { ReactComponent as UserInfoIcon } from '../../../../assets/userinfo-icon.svg';

interface UserInfoProps {
  me: User | null;
  edit: EditType;
  isLoading: boolean;
  setEdit: SetEditType;
}

const UserInfo = ({ me, edit, isLoading, setEdit }: UserInfoProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <UserInfoIcon />
        <S.Title>User Info</S.Title>
      </S.Header>
      {!edit.username && !edit.password && !edit.img && (
        <>
          {!isLoading ? (
            <>
              <ProfileImage
                setEdit={() => setEdit({ ...edit, img: true })}
                temperature={me?.temperature || null}
                profileImg={me?.imgUrl || null}
              />

              <S.NameInfoWrapper>
                <S.Username>{me?.username || null}</S.Username>
                <S.Email>{me?.email || null}</S.Email>
              </S.NameInfoWrapper>

              <S.ButtonWrapper>
                <ButtonMd
                  img={addIcon}
                  text={'내 닉네임 수정'}
                  handleClick={() => setEdit({ ...edit, username: true })}
                />
                <ButtonMd
                  img={EditMdIcon}
                  text={'비밀번호 변경'}
                  handleClick={() => setEdit({ ...edit, password: true })}
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
      {edit.username && (
        <EditUsername
          img={me?.imgUrl || null}
          username={me?.username || null}
          edit={edit}
          handleClose={setEdit}
        />
      )}
      {edit.img && (
        <EditImg
          img={me?.imgUrl || null}
          edit={edit}
          handleClose={setEdit}
        />
      )}
      {edit.password && <EditPassword edit={edit} handleClose={setEdit} />}
    </S.Wrapper>
  );
};

export default UserInfo;
