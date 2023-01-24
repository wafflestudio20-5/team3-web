import { requestNeighborhood } from '../../api/neighborhood';
import Gnb from '../../components/gnb';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NeighborContainer } from './components/neighbor-contatiner';
import { Wrapper } from './neighbor.styled';

export const NeighborhoodLanding = () => {
  return (
    <Wrapper>
      <Gnb />
      <NeighborContainer />
    </Wrapper>
  );
};
