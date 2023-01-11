import { requestNeighborhood } from '../../api/neighborhood';

export const NeighborhoodLanding = () => {
  const handleClick = async () => {
    const res = (await requestNeighborhood()) as any;
    // 사용가능한(중복되지 않는) 이메일인 경우
    console.log(res);
  };
  return <button onClick={handleClick}>이거 클릭해봐요!</button>;
};
