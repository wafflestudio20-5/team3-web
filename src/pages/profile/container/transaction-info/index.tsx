import { useEffect, useState } from 'react';

import ProfileMap from '../../../../components/profile-map';
import TxTitle from '../../components/tx-title';
import ButtonSm from '../../components/button-sm';
import EditLocation from '../../components/edit-location';
import TemperatureBar from '../../components/temperature-bar';

import * as S from './transaction-info.styled';
import EditSmIcon from '../../../../assets/edit-small-icon.svg';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TxInfo = () => {
  const [username, setUsername] = useState<string>('');
  const [editLocation, setEditLocation] = useState(false);

  useEffect(() => {
    // API 호출
    // 지도 위치는 훅으로 표현!!!!!!
    setUsername('lerrybe');
    console.log('refetch Location');
  }, [editLocation]);

  return (
    <S.Wrapper>
      <S.Header>
        <TxInfoIcon />
        <S.Title>Transaction Info</S.Title>
      </S.Header>

      <S.TempWrapper>
        <TxTitle text="와플온도" />
        <TemperatureBar temperature={37.5} />
      </S.TempWrapper>

      <S.LocationWrapper>
        <TxTitle text={`${username}의 동네`} />
        {!editLocation ? (
          <>
            <S.LocationInnerWrapper>
              <S.LocationText>{`* ${`서울 관악구 봉천동`}`}</S.LocationText>
              <ButtonSm
                img={EditSmIcon}
                text={'동네 변경'}
                handleClick={() => setEditLocation(true)}
              />
            </S.LocationInnerWrapper>
            <S.MapWrapper>
              <ProfileMap location={'서울 관악구 봉천동 869-6'} />
            </S.MapWrapper>
          </>
        ) : (
          <EditLocation
            img={null}
            username={'lerrybe'}
            location={'서울 관악구 봉천동'}
            handleClose={setEditLocation}
          />
        )}
      </S.LocationWrapper>
    </S.Wrapper>
  );
};

export default TxInfo;
