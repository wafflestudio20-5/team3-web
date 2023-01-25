import { BADGE_THRESHOLD } from '../../../../constant';

import * as S from './profile-image.styled';
import edit from '../../../../assets/edit-post.svg';
import waffle from '../../../../assets/waffle-small.png';
import defaultImg from '../../../../assets/default-profile.png';

interface ProfileImageProps {
  setEdit: () => void;
  temperature: number | null;
  profileImg: string | null;
}

const ProfileImage = ({
  setEdit,
  temperature,
  profileImg,
}: ProfileImageProps) => {
  return (
    <S.PositionWrapper>
      <S.ProflieImg src={profileImg ? profileImg : defaultImg} alt="profile" />
      <S.EditWrapper onClick={setEdit}>
        <S.EditInnerWrapper>
          <S.Edit src={edit} />
        </S.EditInnerWrapper>
      </S.EditWrapper>
      {temperature && temperature > BADGE_THRESHOLD ? (
        <S.BadgeWrapper>
          <S.BadgeInnerWrapper>
            <S.WaffleBadge src={waffle} />
          </S.BadgeInnerWrapper>
        </S.BadgeWrapper>
      ) : (
        <></>
      )}
    </S.PositionWrapper>
  );
};

export default ProfileImage;
