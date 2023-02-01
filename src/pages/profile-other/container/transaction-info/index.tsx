import TxTitle from '../../components/tx-title';
import ProfileMap from '../../../../components/profile-map';
import TemperatureBar from '../../components/temperature-bar';

import { User } from '../../../../types/users';

import * as S from './transaction-info.styled';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

interface TxInfoProps {
  me: User | null;
  isLoading: boolean;
}

const TxInfo = ({ me, isLoading }: TxInfoProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <TxInfoIcon />
        <S.Title>Transaction Info</S.Title>
      </S.Header>

      <S.TempWrapper>
        <TxTitle text="와플온도" />
        {!isLoading ? <TemperatureBar /> : <S.SkeletonTemp />}
      </S.TempWrapper>

      <S.LocationWrapper>
        <TxTitle text="와플동네" />
        {!isLoading ? (
          <>
            <S.LocationInnerWrapper>
              <S.LocationText>{`* ${me?.location || null}`}</S.LocationText>
            </S.LocationInnerWrapper>
            <S.MapWrapper>
              <ProfileMap location={me?.location || null} />
            </S.MapWrapper>
          </>
        ) : (
          <S.SkeletonMap />
        )}
      </S.LocationWrapper>
    </S.Wrapper>
  );
};

export default TxInfo;
