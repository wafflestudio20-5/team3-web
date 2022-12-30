import { Wrapper } from './dim.styled';

interface DimProps {
  handleToggle: () => void;
}

// DESC: 커스텀 모달 띄웠을 때 모달 뒤 dim 처리를 위한 컴포넌트
const Dim = ({ handleToggle }: DimProps) => {
  return <Wrapper onClick={handleToggle} />;
};

export default Dim;
