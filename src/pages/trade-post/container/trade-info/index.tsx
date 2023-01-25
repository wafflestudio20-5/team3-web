import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../../../components/spinner';
import Description from '../description';
import ProfileImage from '../../components/profile-image';
import TemperatureBar from '../../components/temperature-bar';

import { redirectWithMsg } from '../../../../utils/errors';
import { getTradePost } from '../../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './trade-info.styled';
import { ReactComponent as TradeInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TradeInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const postId = Number(useParams().id);
  const [dataLoading, setDataLoading] = useState(true);
  const { seller } = useAppSelector(state => state.tradePost);
  const { accessToken } = useAppSelector(state => state.session);

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
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  }, [accessToken, postId]);

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrapper>
      <S.SampleImg
        src="https://dnvefa72aowie.cloudfront.net/origin/article/202008/2F22EE23018C3A490E6C3596917934B9B2C80A2958862C4BE49A54BE0AFA6953.jpg?q=95&s=1440x1440&t=inside"
        alt="img"
      />
      <S.Header>
        <TradeInfoIcon />
        <S.Title>Trade Info</S.Title>
      </S.Header>

      <S.UserWrapper>
        <S.InfoWrapper onClick={() => navigate('/')}>
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
