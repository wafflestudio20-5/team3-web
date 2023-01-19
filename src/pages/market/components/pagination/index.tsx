import { useEffect } from 'react';
import { Wrapper, Button } from './pagination.styled';

const Pagination = ({
  total,
  page,
  setPage,
}: {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  console.log(total);
  const arr = Array(total).fill(0);
  useEffect(() => {
    const arr = Array(total).fill(0);
    console.log(arr);
  });

  return (
    <Wrapper>
      {arr.map((p, idx) => (
        <Button
          key={idx + 1}
          onClick={() => setPage(idx + 1)}
          isCurrent={page === idx + 1 ? true : false}
        >
          {idx + 1}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Pagination;
