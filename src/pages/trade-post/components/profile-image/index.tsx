import { BADGE_THRESHOLD } from '../../../../constant';

import * as S from './profile-image.styled';
import waffle from '../../../../assets/waffle-small.png';
import defaultImg from '../../../../assets/default-profile.png';

interface ProfileImageProps {
  temperature: number | null;
  profileImg: string | null;
}

const ProfileImage = ({ temperature, profileImg }: ProfileImageProps) => {
  return (
    <S.PositionWrapper>
      <S.ProflieImg src={profileImg ? profileImg : defaultImg} alt="profile" />
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
