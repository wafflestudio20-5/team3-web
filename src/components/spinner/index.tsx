import { SpinnerGif, Wrapper } from './spinner.styled';
import spinnerImg from '../../assets/loading-spin.gif';

const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerGif src={spinnerImg} />
    </Wrapper>
  );
};

export default Spinner;
