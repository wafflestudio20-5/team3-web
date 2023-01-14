import { requestNeighborhood } from '../../api/neighborhood';
import Gnb from '../../components/gnb';
import { NeighborContainer } from './components/neighbor-contatiner';
import { ShortCut } from './components/neighbor-shortcut';
import { Wrapper } from './neighbor.styled';

export const NeighborhoodLanding = () => {
  const handleClick = async () => {
    const res = (await requestNeighborhood()) as any;
    // 사용가능한(중복되지 않는) 이메일인 경우
    console.log(res);
  };

  return (
    <Wrapper>
      <Gnb />
      <NeighborContainer />
    </Wrapper>
  );
};
