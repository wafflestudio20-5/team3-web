import { useEffect } from 'react';
import { Container, DeleteButton } from './drop-down.styled';

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
  return (
    <Container>
      <DeleteButton onClick={() => setIsModalOpen(true)}>삭제하기</DeleteButton>
    </Container>
  );
};

export default DropDown;
