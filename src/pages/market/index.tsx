import ShortCut from './components/shortcut';
import { Wrapper, Header, Intro, List } from './market.styled';
import Gnb from '../../components/gnb';
import AddButton from './components/add-button';
import SearchBar from './components/search-bar';
import carrot from '../../assets/carrot.svg';
import sample from '../../assets/product-sample.jpeg';
import sample2 from '../../assets/product-sample-2.jpeg';
import sample3 from '../../assets/product-sample-3.jpeg';
import sample4 from '../../assets/product-sample-4.jpeg';
import sample5 from '../../assets/product-sample-5.jpeg';
import sample6 from '../../assets/product-sample-6.jpeg';

const MarketPage = () => {
  return (
    <>
      <Gnb />
      <Wrapper>
        <Header>
          <SearchBar />
        </Header>
        <List>
          <ShortCut
            img={sample6}
            title={'당근 팔아요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample5}
            title={'당근 팔아요 맛이 정말 좋아요 직접 키웠어요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample2}
            title={'아이폰 13프로 미개봉 새상품 팝니다(네고안됨)'}
            tradeStatus="booked"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample}
            title={'패딩 팝니다 3년 입었어요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample3}
            title={'와플 기계 팝니다 거의 새거입니다'}
            tradeStatus="sold"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample4}
            title={'당근 팔아요'}
            tradeStatus="booked"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample5}
            title={'당근 팔아요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample6}
            title={'당근와플 중고제품 팔아요 맛있어요 한 입만 먹었어요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            tradeStatus="onSale"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
        </List>
        <AddButton />
      </Wrapper>
    </>
  );
};

export default MarketPage;
