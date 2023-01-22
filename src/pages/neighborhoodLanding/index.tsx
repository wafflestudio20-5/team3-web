import { requestNeighborhood } from '../../api/neighborhood';
import Gnb from '../../components/gnb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NeighborContainer } from './components/neighbor-contatiner';
import { Wrapper } from './neighbor.styled';

export const NeighborhoodLanding = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const handleClick = async () => {
    if (accessToken) {
      const res = (await requestNeighborhood(accessToken)) as any;
      console.log(res);
    }
  };

  return (
    <Wrapper>
      <Gnb />
      <button onClick={handleClick}>서버 버튼</button>
      <NeighborContainer />
    </Wrapper>
  );
};
