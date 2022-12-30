import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import Header from './components/header';

import * as S from './profile.styled';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);

  // TODO: API 호출, getUsername, getUserId
  useEffect(() => {
    setUsername('lerrybe');
  }, []);

  return (
    <S.Wrapper>
      <Gnb />

      <S.ContentWrapper>
        <Header username={username} handleClick={() => navigate('/')} />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ProfilePage;
