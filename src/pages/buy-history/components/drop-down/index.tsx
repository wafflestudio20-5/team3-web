import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as S from './drop-down.styled';

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

  return (
    <S.Container
      initial={isDropped ? 'open' : 'close'}
      animate={isDropped ? 'open' : 'close'}
      variants={{
        open: { height: 'auto' },
        close: { height: 0 },
      }}
    >
      <S.ElemWrapper>
        <S.Elem onClick={() => navigate(`/tradepost/${postId}/review`)}>
          후기 보내기
        </S.Elem>
      </S.ElemWrapper>
    </S.Container>
  );
};

export default DropDown;
