import { useEffect, useState } from 'react';

import TxTitle from '../../components/tx-title';
import ButtonSm from '../../components/button-sm';
import EditLocation from '../../components/edit-location';
import ProfileMap from '../../../../components/profile-map';
import TemperatureBar from '../../components/temperature-bar';

import { requestMyInfo } from '../../../../api/users';

import * as S from './transaction-info.styled';
import EditSmIcon from '../../../../assets/edit-small-icon.svg';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TxInfo = () => {
  // TODO: 객체 묶기
  const [temp, setTemp] = useState<number | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [editLocation, setEditLocation] = useState(false);

  // TODO: 토큰 가져오기 (with useSelector)
  const accessToken = 'sampleToken';

  useEffect(() => {
    // TODO: API 호출, GET /users/me
    // TODO: 요청 실패시 에러 처리 (프로필 페이지 접근 X), 에러 처리 쉬운 쪽으로 API 함수 작성
    (async () => {
      const res = await requestMyInfo(accessToken);
      if (res) {
        setImg(res?.data?.img);
        setTemp(res?.data?.temperature);
        setUsername(res?.data?.username);
        setLocation(res?.data?.location);
      }
    })();
  }, [editLocation]);

  return (
    <S.Wrapper>
      <S.Header>
        <TxInfoIcon />
        <S.Title>Transaction Info</S.Title>
      </S.Header>

      <S.TempWrapper>
        <TxTitle text="와플온도" />
        <TemperatureBar temperature={temp} />
      </S.TempWrapper>

      <S.LocationWrapper>
        <TxTitle text={`${username}의 동네`} />
        {!editLocation ? (
          <>
            <S.LocationInnerWrapper>
              <S.LocationText>{`* ${location}`}</S.LocationText>
              <ButtonSm
                img={EditSmIcon}
                text={'동네 변경'}
                handleClick={() => setEditLocation(true)}
              />
            </S.LocationInnerWrapper>
            <S.MapWrapper>
              <ProfileMap location={location} />
            </S.MapWrapper>
          </>
        ) : (
          <EditLocation
            img={img}
            username={username}
            location={location}
            handleClose={setEditLocation}
          />
        )}
      </S.LocationWrapper>
    </S.Wrapper>
  );
};

export default TxInfo;
