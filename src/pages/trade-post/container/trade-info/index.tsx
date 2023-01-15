import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Description from '../../components/description';
import ProfileImage from '../../components/profile-image';
import TemperatureBar from '../../components/temperature-bar';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getTradePost } from '../../../../store/slices/tradePostSlice';

import * as S from './trade-info.styled';
import { ReactComponent as TradeInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TradeInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dataLoading, setDataLoading] = useState(true);
  const { seller } = useAppSelector(state => state.tradePost);
  const { accessToken } = useAppSelector(state => state.session);

  useEffect(() => {
    if (accessToken) {
      dispatch(getTradePost({ accessToken, postId: 1 }))
        .unwrap()
        .then(() => {
          setDataLoading(false);
        })
        .catch(err => {
          // TODO: 컴포넌트단에서 케이스별 에러처리
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 401) {
              console.log(err.response?.data.error);
              // alert 후 로그인 페이지로 redirect
            }
          }
        });
    }
  }, [accessToken]);

  if (dataLoading) {
    return <div>데이터 로딩 중...</div>;
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
