import { Button } from './button-normal.styled';

interface ButtonNormal {
  text: string;
  bgColor?: string;
  handleClick: () => void;
}

const ButtonNormal: React.FC<ButtonNormal> = ({
  text,
  bgColor,
  handleClick,
}: ButtonNormal) => {
  return (
    <Button onClick={handleClick} bgColor={bgColor}>
      {text}
    </Button>
  );
};

export default ButtonNormal;
