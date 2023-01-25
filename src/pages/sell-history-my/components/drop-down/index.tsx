import { useEffect } from 'react';
import { Container, Button } from './drop-down.styled';

const DropDown = ({
  dropDownRef,
  isDropped,
  setIsDropped,
  setIsModalOpen,
}: {
  dropDownRef: any;
  isDropped: boolean;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  // TODO: 상품 수정 및 삭제하기 추가

  return (
    <Container>
      <Button>수정하기</Button>
      <Button>삭제하기</Button>
    </Container>
  );
};

export default DropDown;
