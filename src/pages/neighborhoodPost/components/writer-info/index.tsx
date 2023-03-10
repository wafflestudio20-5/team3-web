import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../store/hooks';
import { shortenLocation } from '../../../../utils/location';
import ProfileImage from '../../../trade-post/components/profile-image';
import TemperatureBar from '../../../trade-post/components/temperature-bar';
import * as S from './writer-info.styled';

interface WriterInfoProps {
  userId: number;
  username: string;
  location: string;
  temperature: number;
  imgUrl: string | null;
}

export const WriterInfo = ({
  userId,
  username,
  location,
  temperature,
  imgUrl,
}: WriterInfoProps) => {
  const navigate = useNavigate();
  const { me } = useAppSelector(state => state.users);
  return (
    <S.UserWrapper>
      <S.InfoWrapper
        onClick={() => {
          if (me && me.id === userId) {
            navigate(`/profile/me`);
          } else {
            navigate(`/profile/${userId}`);
          }
        }}
      >
        <ProfileImage
          // temperature={seller?.temperature || null}
          // profileImg={seller?.imgUrl}
          temperature={temperature}
          profileImg={imgUrl}
        />
        <S.NameWrapper>
          {/* <S.Username>{seller?.username || null}</S.Username>
            <S.Location>{seller?.location || null}</S.Location> */}
          <S.Username>{username}</S.Username>
          <S.Location>{location ? shortenLocation(location) : ''}</S.Location>
        </S.NameWrapper>
      </S.InfoWrapper>

      <S.TempWrapper>
        {/* <TemperatureBar temperature={seller?.temperature || null} /> */}
        <TemperatureBar temperature={temperature} />
      </S.TempWrapper>
    </S.UserWrapper>
  );
};
