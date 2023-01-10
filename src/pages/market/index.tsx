import ShortCut from './components';
import { Wrapper, List, Title } from './market.styled';
import Gnb from '../../components/gnb';
import AddButton from './components/add-button';
import carrot from '../../assets/carrot.svg';
import kakao from '../../assets/kakao.svg';

const MarketPage = () => {
  return (
    <>
      <Gnb />
      <Wrapper>
        <List>
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={kakao}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <AddButton />
        </List>
      </Wrapper>
    </>
  );
};

export default MarketPage;
