import * as S from './navigation-button.styled';
import { ReactComponent as ArrowIcon } from '../../../../assets/arrow-rightup.svg';

interface NavigationButtonProps {
  img: string;
  text: string;
  handleClick: () => void;
}

const NavigationButton = ({
  img,
  text,
  handleClick,
}: NavigationButtonProps) => {
  return (
    <S.Wrapper onClick={handleClick}>
      <S.TitleWrapper>
        <S.SignatureIcon src={img} alt="img" />
        {text}
      </S.TitleWrapper>
      <ArrowIcon />
    </S.Wrapper>
  );
};

export default NavigationButton;
