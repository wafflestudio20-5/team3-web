import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Description from '../description';
import ImgCarousel from '../../components/carousel';
import Spinner from '../../../../components/spinner';
import ProfileImage from '../../components/profile-image';
import TemperatureBar from '../../components/temperature-bar';

import { loadItem } from '../../../../utils/storage';
import { normalToast } from '../../../../utils/basic-toast-modal';
import { getTradePost } from '../../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './trade-info.styled';
import { ReactComponent as TradeInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TradeInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const postId = Number(useParams().id);
  const [dataLoading, setDataLoading] = useState(true);
  const { me } = useAppSelector(state => state.users);
  const { seller } = useAppSelector(state => state.tradePost);
  const accessToken = loadItem('accessToken');

  useEffect(() => {
    if (accessToken && postId) {
      dispatch(getTradePost({ accessToken, postId }))
        .unwrap()
        .then(() => {
          setDataLoading(false);
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              normalToast(err.response?.data.error);
            } else {
              normalToast('요청을 수행할 수 없습니다.');
              navigate(-1);
            }
          }
        });
    }
  }, [accessToken, postId]);

  const handleClick = useCallback(() => {
    if (me && me.id === seller?.id) {
      navigate('/profile/me');
    } else {
      navigate(`/profile/${seller?.id}`);
    }
  }, [seller?.id]);

  if (dataLoading) {
    return <Spinner />;
  }

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
