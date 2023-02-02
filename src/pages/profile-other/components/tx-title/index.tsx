import { useState } from 'react';
import * as S from './tx-title.styled';
import { ReactComponent as InfoIcon } from '../../../../assets/info.svg';

interface TxTitleProps {
  text: string;
  infoText?: string;
}

const TxTitle = ({ text, infoText }: TxTitleProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <InfoIcon
          onMouseOver={() => {
            setOpenModal(true);
          }}
          onMouseOut={() => {
            setOpenModal(false);
          }}
        />
        <S.Text
          onMouseOver={() => {
            setOpenModal(true);
          }}
          onMouseOut={() => {
            setOpenModal(false);
          }}
        >
          {text}
        </S.Text>
      </S.Wrapper>
      {openModal && <S.ArrowBox>{infoText}</S.ArrowBox>}
    </S.OuterWrapper>
  );
};

export default TxTitle;
