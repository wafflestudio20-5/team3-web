import * as S from './navigation-button.styled';
import arrowIcon from '../../../../assets/arrow-rightup.svg';

interface NavigationButtonProps {
  isLoading: boolean;
  img: string;
  text: string;
  handleClick: () => void;
}

const NavigationButton = ({
  isLoading,
  img,
  text,
  handleClick,
}: NavigationButtonProps) => {
  return (
    <>
      {!isLoading ? (
        <S.Wrapper onClick={handleClick}>
          <S.TitleWrapper>
            <S.SignatureIcon src={img} alt="img" />
            {text}
          </S.TitleWrapper>
          <S.ArrowIcon src={arrowIcon} alt="img" />
        </S.Wrapper>
      ) : (
        <S.SkeletonButton />
      )}
    </>
  );
};

export default NavigationButton;
