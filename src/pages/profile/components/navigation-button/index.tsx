import * as S from './navigation-button.styled';
import { ReactComponent as ChatIcon } from '../../../../assets/chat.svg';
import { ReactComponent as DaangnIcon } from '../../../../assets/daangn.svg';
import { ReactElement } from 'react';

interface NavigationButtonProps {
  img: string;
  text: string;
  handleClick: () => void;
}

const NavigationButton = ({ img, text, handleClick }: NavigationButtonProps) => {
  return (
    <S.Wrapper onClick={handleClick}>
      <S.SignatureIcon src={img} alt="img" />
    </S.Wrapper>
  );
};

export default NavigationButton;
