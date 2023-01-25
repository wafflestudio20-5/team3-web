import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Container, Button } from './drop-down.styled';

const DropDown = ({
  dropDownRef,
  isDropped,
  setIsDropped,
  postId,
}: {
  dropDownRef: any;
  isDropped: boolean;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  postId: number;
}) => {
  const navigate = useNavigate();
  const clickOutside = (e: MouseEvent) => {
    if (isDropped && !dropDownRef.current.contains(e.target)) {
      setIsDropped(false);
    }
  };
  useEffect(() => {
    if (isDropped) {
      window.addEventListener('click', clickOutside);
      return () => {
        window.removeEventListener('click', clickOutside);
      };
    }
  });

  // TODO: 이미 리뷰 보낸 경우 처리

  return (
    <Container>
      <Button onClick={() => navigate(`/tradepost/${postId}/review`)}>
        리뷰 보내기
      </Button>
    </Container>
  );
};

export default DropDown;
