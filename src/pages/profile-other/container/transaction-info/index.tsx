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
        <TxTitle
          text="와플온도"
          infoText={
            '와플온도는 와플마켓 사용자로부터\n받은 칭찬, 후기, 등을 종합해서 만든\n매너 지표예요.'
          }
        />
        {!isLoading ? <TemperatureBar /> : <S.SkeletonTemp />}
      </S.TempWrapper>

      <S.LocationWrapper>
        <TxTitle
          text="와플동네"
          infoText={
            '와플동네는 현재 설정된 나의 동네를\n보여줘요. 범위를 설정하고 주변의\n따뜻한 이웃들과 거래하세요.'
          }
        />
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
