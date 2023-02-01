import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Wrapper, Move, More, Button } from './pagination.styled';

const Pagination = ({
  total,
  page,
  setPage,
}: {
  total: number;
  page: number;
  setPage: (page: number) => void;
}) => {
  // DESC: n = 한 줄에 보이는 페이지 버튼 수
  // TODO: 현재 테스트용으로 3페이지씩 보이도록 했으나 게시물 수 늘어나면 n=5로 변경 예정
  const n = 3;
  const [pageHead, setPageHead] = useState<number>(
    Math.floor((page - 1) / n) * n + 1,
  );
  const prevHead = () => {
    if (pageHead - n > 0) {
      setPage(pageHead - 1);
      setPageHead(value => value - n);
    } else {
      setPage(1);
      toast('첫 번째 페이지입니다');
    }
  };
  const prevPage = () => {
    if (page === 1) {
      toast('첫 번째 페이지입니다');
    } else {
      if (page === pageHead) {
        setPageHead(value => value - n);
      }
      setPage(page - 1);
    }
  };
  const nextHead = () => {
    if (pageHead + n <= total) {
      setPage(pageHead + n);
      setPageHead(value => value + n);
    } else {
      setPage(total);
      toast('마지막 페이지입니다');
    }
  };

  const nextPage = () => {
    if (page === total) {
      toast('마지막 페이지입니다');
    } else {
      if (page === pageHead + n - 1) {
        setPageHead(value => value + n);
      }
      setPage(page + 1);
    }
  };

  return (
    <Wrapper>
      <Move onClick={prevHead}>{'<<'}</Move>
      <Move onClick={prevPage}>{'<'}</Move>
      {pageHead - n > 0 && <More>...</More>}
      {Array(pageHead + n <= total ? n : total - pageHead + 1)
        .fill(0)
        .map((p, idx) => (
          <Button
            key={pageHead + idx}
            onClick={() => setPage(pageHead + idx)}
            isCurrent={page === pageHead + idx ? true : false}
          >
            {pageHead + idx}
          </Button>
        ))}
      {pageHead + n <= total && <More>...</More>}
      <Move onClick={nextPage}>{'>'}</Move>
      <Move onClick={nextHead}>{'>>'}</Move>
    </Wrapper>
  );
};

export default Pagination;
