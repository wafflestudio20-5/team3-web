import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Announcement, GoBack, Wrapper } from './error.styled';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
  }, []);

  return (
    <Wrapper>
      <Announcement>ERROR!</Announcement>
      <GoBack>돌아가는 중입니다...</GoBack>
    </Wrapper>
  );
};

export default ErrorPage;
