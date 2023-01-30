import * as S from './modal-wrapper.styled';

interface ModalWrapperProps {
  children: React.ReactElement;
  handleClose: () => void;
}

const ModalWrapper = ({ children, handleClose }: ModalWrapperProps) => {
  return (
    <S.FixedWrapper>
      <S.Dim onClick={handleClose} />
      <S.Wrapper>
        <S.ModalContainer>{children}</S.ModalContainer>
      </S.Wrapper>
    </S.FixedWrapper>
  );
};

export default ModalWrapper;
