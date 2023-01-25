import { Wrapper, Bar, Div, Img, Button } from './search-bar.styled';
import search from '../../../../assets/search.svg';

interface Search {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  searchClick: () => void;
}

const SearchBar = ({ keyword, setKeyword, searchClick }: Search) => {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      searchClick();
    }
  };
  // TODO: 로그인한 유저 정보 받아서 placeholder의 지역 바꿔주기
  return (
    <Wrapper>
      <Div>
        <Img src={search} />
        <Bar
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="봉천동 근처 물품 검색하기"
          onKeyPress={onKeyPress}
        />
      </Div>
      <Button onClick={searchClick}>검색</Button>
    </Wrapper>
  );
};

export default SearchBar;
