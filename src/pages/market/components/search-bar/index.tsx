import { Bar, Div, Img } from './search-bar.styled';
import search from '../../../../assets/search.svg';

const SearchBar = () => {
  return (
    <Div>
      <Img src={search} />
      <Bar placeholder="봉천동 근처 물품 검색하기" />
    </Div>
  );
};

export default SearchBar;
