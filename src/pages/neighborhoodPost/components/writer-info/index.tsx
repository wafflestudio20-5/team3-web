import ProfileImage from '../../../trade-post/components/profile-image';
import TemperatureBar from '../../../trade-post/components/temperature-bar';
import * as S from '../../../trade-post/container/trade-info/trade-info.styled';

export const WriterInfo = () => {
  return (
    <S.UserWrapper>
      <S.InfoWrapper>
        <ProfileImage
          // temperature={seller?.temperature || null}
          // profileImg={seller?.imgUrl}
          temperature={null}
          profileImg={null}
        />
        <S.NameWrapper>
          {/* <S.Username>{seller?.username || null}</S.Username>
            <S.Location>{seller?.location || null}</S.Location> */}
          <S.Username>유저 이름</S.Username>
          <S.Location>봉천동</S.Location>
        </S.NameWrapper>
      </S.InfoWrapper>

      <S.TempWrapper>
        {/* <TemperatureBar temperature={seller?.temperature || null} /> */}
        <TemperatureBar temperature={40.5} />
      </S.TempWrapper>
    </S.UserWrapper>
  );
};
