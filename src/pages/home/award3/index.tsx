import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../../../types/users';
import { shortenLocation } from '../../../utils/location';

import * as S from './award3.styled';
import carrot from '../../../assets/carrot.svg';
import frame from '../../../assets/award-frame.png';
import alt from '../../../assets/default-profile.png';

interface Award3Props {
  user: User | null;
}

const Award3 = ({ user }: Award3Props) => {
  const navigate = useNavigate();
  const [temp, setTemp] = useState(user?.temperature);

  useEffect(() => {
    if (user?.temperature && user?.temperature >= 100) {
      setTemp(100);
    }
  }, []);

  return (
    <S.Wrapper onClick={() => navigate(`/profile/${user?.id}`)}>
      <S.ImgWrapper>
        <S.ImgUser src={user?.imgUrl || alt} alt="user" />
        <S.ImgFrame src={frame} alt="frame" />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <S.Name>{user?.username}</S.Name>
        <S.Logo src={carrot} alt="carrot" />
        <S.Temp>{`${temp}°C`}</S.Temp>
      </S.InfoWrapper>
      <S.AddressWrapper>
        {shortenLocation(user?.location || '')}
      </S.AddressWrapper>
    </S.Wrapper>
  );
};

export default Award3;
