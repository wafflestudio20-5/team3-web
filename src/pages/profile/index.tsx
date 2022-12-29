import * as S from './profile.styled';

import Gnb from '../../components/gnb';
import { CategoryType } from '../../types/category';

const ProfilePage = () => {
  return (
    <S.Wrapper>
      <Gnb category={CategoryType.MYPAGE} />
      프로필페이지
    </S.Wrapper>
  );
};

export default ProfilePage;
