import TxTitle from '../../components/tx-title';
import ButtonSm from '../../components/button-sm';
import EditLocation from '../../components/edit-location';
import ProfileMap from '../../../../components/profile-map';
import TemperatureBar from '../../components/temperature-bar';

import { SetEditType, User, EditType } from '../../../../types/users';

import * as S from './transaction-info.styled';
import EditSmIcon from '../../../../assets/edit-small-icon.svg';
import { ReactComponent as TxInfoIcon } from '../../../../assets/txinfo-icon.svg';

interface TxInfoProps {
  me: User | null;
  edit: EditType;
  isLoading: boolean;
  setEdit: SetEditType;
}

const TxInfo = ({ me, edit, isLoading, setEdit }: TxInfoProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <TxInfoIcon />
        <S.Title>Transaction Info</S.Title>
      </S.Header>

      <S.TempWrapper>
        <TxTitle text="와플온도" />
        {!isLoading ? (
          <TemperatureBar temperature={me?.temperature || null} />
        ) : (
          <S.SkeletonTemp />
        )}
      </S.TempWrapper>

      <S.LocationWrapper>
        <TxTitle text="와플동네" />
        {!edit.location ? (
          <>
            {!isLoading ? (
              <>
                <S.LocationInnerWrapper>
                  <S.LocationText>{`* ${me?.location || null}`}</S.LocationText>
                  <ButtonSm
                    img={EditSmIcon}
                    text={'동네 변경'}
                    handleClick={() => setEdit({ ...edit, location: true })}
                  />
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
