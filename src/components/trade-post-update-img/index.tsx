import { ChangeEvent } from 'react';
import * as S from './styles';

interface TradePostUpdateImgProps {
  values: {
    title?: string;
    desc?: string;
    price?: number;
  };
  handleClose: () => void;
  handleSubmit: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const TradePostUpdateImg = ({
  values,
  handleClose,
  handleSubmit,
  handleChange,
}: TradePostUpdateImgProps) => {
  return (
    <S.ModalOuterLayout>
      <S.ModalLayout>
        <S.ModalHeader>
          <S.ModalClose onClick={handleClose}>닫기</S.ModalClose>
          <S.ModalTitle>중고거래 이미지 수정</S.ModalTitle>
          <S.ModalSubmit onClick={handleSubmit}>완료</S.ModalSubmit>
        </S.ModalHeader>
        <S.PostTitle
          disabled
          placeholder="글제목"
          required
          name="title"
          value={values?.title}
          type="text"
          onChange={handleChange}
        />
        <S.PostDesc
          disabled
          placeholder="봉천동에 올릴 게시글 내용을 작성해주세요. (가품 및 판매 금지 품목은 게시가 제한될 수 있어요.)"
          required
          name="desc"
          value={values?.desc}
          onChange={handleChange}
        />
        <S.PostPriceWrapper>
          <S.PostPriceUnit>₩</S.PostPriceUnit>
          <S.PostPrice
            disabled
            placeholder="가격 (원)"
            required
            name="price"
            value={values?.price}
            type="text"
            onChange={handleChange}
          />
        </S.PostPriceWrapper>

        <S.PostAnnounceWrapper>
          <S.Emphasize>글 작성하기 전에 알려드려요.</S.Emphasize>
          <S.Announce>허위 매물은 올리실 수 없어요.</S.Announce>
          <S.Announce>
            또한, 중고거래 매물 이외의 글은 동네 생활 게시판을 이용해주세요.
          </S.Announce>
        </S.PostAnnounceWrapper>
      </S.ModalLayout>
    </S.ModalOuterLayout>
  );
};

export default TradePostUpdateImg;
