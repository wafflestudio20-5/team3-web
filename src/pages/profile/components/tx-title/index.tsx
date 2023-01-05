import * as S from './tx-title.styled';
import { ReactComponent as InfoIcon } from '../../../../assets/info.svg';

interface TxTitleProps {
  text: string;
}

const TxTitle = ({ text }: TxTitleProps) => {
  return (
    <S.Wrapper>
      <InfoIcon />
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default TxTitle;
