import * as S from './button-sm.styled';

interface ButtonSmProps {
  img?: string;
  text: string;
  handleClick: (value: any) => void;
}

const ButtonSm = ({ img, text, handleClick }: ButtonSmProps) => {
  return (
    <S.Wrapper onClick={handleClick}>
      {img && <S.Img src={img} alt="img" />}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default ButtonSm;
