import { useEffect, useState } from 'react';

import Map from '../../../../components/map';
import TxTitle from '../../components/tx-title';
import TemperatureBar from '../../components/temperature-bar';

import * as S from './transaction-info.styled';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

const TxInfo = () => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    setUsername('lerrybe');
  }, []);

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
        <Map />
      </S.LocationWrapper>
    </S.Wrapper>
  );
};

export default TxInfo;
