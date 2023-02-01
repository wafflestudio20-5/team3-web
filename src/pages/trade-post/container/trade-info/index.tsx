import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Description from '../description';
import ImgCarousel from '../../components/carousel';
import ProfileImage from '../../components/profile-image';
import TemperatureBar from '../../components/temperature-bar';

import { useAppSelector } from '../../../../store/hooks';

import * as S from './trade-info.styled';
import { ReactComponent as TradeInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TradeInfo = () => {
  const navigate = useNavigate();
  const { me } = useAppSelector(state => state.users);
  const { seller } = useAppSelector(state => state.tradePost);

  const handleClick = useCallback(() => {
    if (me && me.id === seller?.id) {
      navigate('/profile/me');
    } else {
      navigate(`/profile/${seller?.id}`);
    }
  }, [seller?.id]);

  return (
    <S.Wrapper>
      <ImgCarousel />

      <S.Header>
        <TradeInfoIcon />
        <S.Title>Trade Info</S.Title>
      </S.Header>

      <S.UserWrapper>
        <S.InfoWrapper onClick={handleClick}>
          <ProfileImage
            temperature={seller?.temperature || null}
            profileImg={seller?.imgUrl || null}
          />
          <S.NameWrapper>
            <S.Username>{seller?.username || null}</S.Username>
            <S.Location>{seller?.location || null}</S.Location>
          </S.NameWrapper>
        </S.InfoWrapper>

        <S.TempWrapper>
          <TemperatureBar temperature={seller?.temperature || null} />
        </S.TempWrapper>
      </S.UserWrapper>

      <Description />
    </S.Wrapper>
  );
};

export default TradeInfo;
