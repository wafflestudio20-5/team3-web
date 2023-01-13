import * as S from './button.styled';

interface ButtonProps {
  text: string;
  bgColor?: string;
  handleClick: () => void;
}

const Button = ({ text, bgColor, handleClick }: ButtonProps) => {
  return (
    <S.Wrapper bgColor={bgColor} onClick={handleClick}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
