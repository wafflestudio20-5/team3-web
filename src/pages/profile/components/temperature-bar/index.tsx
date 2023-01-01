import { useEffect, useState } from 'react';

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

interface TemperatureBarProps {
  temperature: number;
}

const TemperatureBar = ({ temperature }: TemperatureBarProps) => {
  const [width, setWidth] = useState(temperature);
  const [barColor, setBarColor] = useState('#EEEEEE');
  const [tempIcon, setTempIcon] = useState(COLOR_MANNER_DEFAULT);

  useEffect(() => {
    setWidth(temperature);

    if (temperature < 36.5) {
      setTempIcon(level1Icon);
      setBarColor(COLOR_MANNER_LEVEL_1);
    } else if (36.5 <= temperature && temperature < 40.0) {
      setTempIcon(level2Icon);
      setBarColor(COLOR_MANNER_LEVEL_2);
    } else if (40.0 <= temperature && temperature < 50.0) {
      setTempIcon(level3Icon);
      setBarColor(COLOR_MANNER_LEVEL_3);
    } else if (50.0 <= temperature) {
      setTempIcon(level4Icon);
      setBarColor(COLOR_MANNER_LEVEL_4);
    }
  }, [temperature]);

  return (
    <S.Wrapper>
      <S.InitialTemp>
        <S.InitialTempText>첫 온도 36.5°C</S.InitialTempText>
        <ArrowIcon />
      </S.InitialTemp>

      <S.CurrentTempWrapper>
        <S.CurrentTempText
          color={barColor}
        >{`${temperature}°C`}</S.CurrentTempText>
        <S.CurrentIcon src={tempIcon} />
      </S.CurrentTempWrapper>

      {/* ProgressBar */}
      <S.ProgressBg />
      <S.ProgressTemp width={width} bgColor={barColor} />
    </S.Wrapper>
  );
};

export default TemperatureBar;
