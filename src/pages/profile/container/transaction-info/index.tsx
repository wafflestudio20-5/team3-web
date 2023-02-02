import TxTitle from '../../components/tx-title';
import ButtonSm from '../../components/button-sm';
import EditLocation from '../../components/edit-location';
import ProfileMap from '../../../../components/profile-map';
import TemperatureBar from '../../components/temperature-bar';

import { SetEditType, User, EditType } from '../../../../types/users';

import * as S from './transaction-info.styled';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

interface TxInfoProps {
  me: User | null;
  edit: EditType;
  isLoading: boolean;
  setEdit: SetEditType;
  setOpenAreaModal: (value: boolean) => void;
}

const TxInfo = ({
  me,
  edit,
  setEdit,
  isLoading,
  setOpenAreaModal,
}: TxInfoProps) => {
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
        {!edit.location ? (
          <>
            {!isLoading ? (
              <>
                <S.LocationInnerWrapper>
                  <S.LocationText>{`* ${me?.location || null}`}</S.LocationText>
                  <S.ButtonWrapper>
                    <ButtonSm
                      text={'범위'}
                      handleClick={() => setOpenAreaModal(true)}
                    />
                    <ButtonSm
                      text={'변경'}
                      handleClick={() => setEdit({ ...edit, location: true })}
                    />
                  </S.ButtonWrapper>
                </S.LocationInnerWrapper>
                <S.MapWrapper>
                  <ProfileMap location={me?.location || null} />
                </S.MapWrapper>
              </>
            ) : (
              <S.SkeletonMap />
            )}
          </>
        ) : (
          <EditLocation
            edit={edit}
            location={me?.location || null}
            handleClose={setEdit}
          />
        )}
      </S.LocationWrapper>
    </S.Wrapper>
  );
};

export default TxInfo;
