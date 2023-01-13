import { Button, Img, Span } from './login-button.styled';

interface LoginButton {
  img: string;
  text: string;
  color?: string;
  bgColor?: string;
  handleClick?: () => void;
}

const LoginButton = ({
  img,
  text,
  color,
  bgColor,
  handleClick,
}: LoginButton) => {
  return (
      <Button onClick={handleClick} color={color} bgColor={bgColor}>
        <Img src={img} />
        <Span>{text}</Span>
      </Button>
  );
};

export default LoginButton;
