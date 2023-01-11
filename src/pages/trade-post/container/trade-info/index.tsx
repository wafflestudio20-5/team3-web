import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Description from '../../components/description';
import ProfileImage from '../../components/profile-image';
import TemperatureBar from '../../components/temperature-bar';

import * as S from './trade-info.styled';
import { ReactComponent as TradeInfoIcon } from '../../../../assets/txinfo-icon.svg';

// TODO: 임시 토큰
// import { accessToken } from '../../../../constant';

const TradeInfo = () => {
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(true);
  // const dispatch = useAppDispatch();
  // const seller = useAppSelector(state => state.seller);
  // const accessToken = useAppSelector(state => state.accessToken);

  useEffect(() => {
    // dispatch(getTradePost(accessToken, postNumber))
    //   .unwrap()
    //   .then(() => {
    //     setIsLoading(false);
    //   })
    //   .catch(err => {
    //     // TODO: 컴포넌트단에서 케이스별 에러처리
    //     if (axios.isAxiosError(err)) {
    //       if (err.response?.status === 401) {
    //         console.log(err.response?.data.error);
    //         // alert 후 로그인 페이지로 redirect
    //       }
    //       // ...
    //     }
    //   });
  }, []);

  const [seller] = useState({
    id: 1,
    username: 'lerry',
    email: '123@gmail.com',
    location: '서울 관악구 봉천동',
    temperature: 37.8,
    imgUrl:
      'https://i.ytimg.com/vi/HJ6mfzCh1_A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXouyVg57RxkROo4Fo2EMluMFXAA',
  });

  return (
    <S.Wrapper>
      <S.Header>
        <TradeInfoIcon />
        <S.Title>Trade Info</S.Title>
      </S.Header>

      <S.UserWrapper>
        <S.InfoWrapper onClick={() => navigate('/')}>
          <ProfileImage
            temperature={seller?.temperature || null}
            profileImg={seller?.imgUrl}
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
