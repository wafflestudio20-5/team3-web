import * as S from './button-md.styled';

interface ButtonMdProps {
  img?: string;
  text: string;
  handleClick: () => void; // TODO: type 수정
}

const ButtonMd = ({ img, text, handleClick }: ButtonMdProps) => {
  return (
    <S.Wrapper onClick={handleClick}>
      {img && <S.Img src={img} alt="img" />}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default ButtonMd;
