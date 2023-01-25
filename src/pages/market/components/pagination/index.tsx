import { Wrapper, Button } from './pagination.styled';

const Pagination = ({
  total,
  page,
  setPage,
}: {
  total: number;
  page: number;
  setPage: (page: number) => void;
}) => {
  return (
    <Wrapper>
      {Array(total)
        .fill(0)
        .map((p, idx) => (
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
