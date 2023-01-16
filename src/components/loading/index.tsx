import { LoadingAnnounce, LoadingGif, Wrapper } from './loading.styled';
import loadingImg from '../../assets/loading-block.gif';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingGif src={loadingImg} />
      <LoadingAnnounce>로딩 중 입니다..</LoadingAnnounce>
    </Wrapper>
  );
};

export default Loading;
