import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getUser } from '../../../../store/slices/usersSlice';
import { normalToast } from '../../../../utils/basic-toast-modal';

import * as S from './temperature-bar.styled';
import level1Icon from '../../../../assets/temp-1-icon.svg';
import level2Icon from '../../../../assets/temp-2-icon.svg';
import level3Icon from '../../../../assets/temp-3-icon.svg';
import level4Icon from '../../../../assets/temp-4-icon.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/arrow-drop-down.svg';

import {
  COLOR_MANNER_DEFAULT,
  COLOR_MANNER_LEVEL_1,
  COLOR_MANNER_LEVEL_2,
  COLOR_MANNER_LEVEL_3,
  COLOR_MANNER_LEVEL_4,
} from '../../../../constant';

const TemperatureBar = () => {
  const [width, setWidth] = useState<number>();
  const [barColor, setBarColor] = useState('#EEEEEE');
  const [tempIcon, setTempIcon] = useState(COLOR_MANNER_DEFAULT);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = Number(useParams().id);
  const { currentUser } = useAppSelector(state => state.users);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId))
        .unwrap()
        .then(res => {
          if (res?.temperature >= 100) {
            setWidth(100);
          } else {
            setWidth(res?.temperature);
          }
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              normalToast(err.response?.data.error);
              navigate(-1);
            } else {
              normalToast('요청을 수행할 수 없습니다.');
              navigate(-1);
            }
          }
        });
    }
  }, [userId]);

  useEffect(() => {
    if (width) {
      if (width < 36.5) {
        setTempIcon(level1Icon);
        setBarColor(COLOR_MANNER_LEVEL_1);
      } else if (36.5 <= width && width < 40.0) {
        setTempIcon(level2Icon);
        setBarColor(COLOR_MANNER_LEVEL_2);
      } else if (40.0 <= width && width < 50.0) {
        setTempIcon(level3Icon);
        setBarColor(COLOR_MANNER_LEVEL_3);
      } else if (50.0 <= width) {
        setTempIcon(level4Icon);
        setBarColor(COLOR_MANNER_LEVEL_4);
      }
    }
  }, [width]);

  return (
    <S.Wrapper>
      <S.InitialTemp>
        <S.InitialTempText>첫 온도 36.5°C</S.InitialTempText>
        <ArrowIcon />
      </S.InitialTemp>

      <S.CurrentTempWrapper>
        <S.CurrentTempText color={barColor}>{`${width}°C`}</S.CurrentTempText>
        <S.CurrentIcon src={tempIcon} />
      </S.CurrentTempWrapper>

      {/* ProgressBar */}
      <S.ProgressBg />
      {width && <S.ProgressTemp width={width} bgColor={barColor} />}
    </S.Wrapper>
  );
};

export default TemperatureBar;
