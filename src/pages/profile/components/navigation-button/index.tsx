import * as S from './navigation-button.styled';
import arrowIcon from '../../../../assets/arrow-rightup.svg';

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
      <S.ArrowIcon src={arrowIcon} alt="img" />
    </S.Wrapper>
  );
};

export default NavigationButton;
