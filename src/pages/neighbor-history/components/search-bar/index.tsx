import { Wrapper, Bar, Div, Img, Clear } from './search-bar.styled';
import search from '../../../../assets/search.svg';
import close from '../../../../assets/close.svg';

interface Search {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  searchClick: () => void;
  dong: string | undefined;
}

const SearchBar = ({ keyword, setKeyword, searchClick, dong }: Search) => {
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
          placeholder={`${dong ? dong : '내 동네'} 근처 정보 검색하기`}
          onKeyPress={onKeyPress}
        />
        {keyword && <Clear src={close} onClick={() => setKeyword('')} />}
      </Div>
    </Wrapper>
  );
};

export default SearchBar;
