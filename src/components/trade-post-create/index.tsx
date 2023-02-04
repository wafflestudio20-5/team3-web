import { ChangeEvent } from 'react';
import * as S from './styles';
import UploadImage from '../upload-image';
import useThrottle from '../../hooks/useThrottle';
import { toStringNumberWithComma } from '../../utils/price';

interface TradePostCreateProps {
  values: {
    title?: string;
    desc?: string;
    price?: number;
    imgUrls?: (string | File | null)[];
  };
  handleClose: () => void;
  handleSubmit: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  imgObject: { id?: number; img?: string | File | null }[];
  setImgObject: (values: { id?: number; img?: string | File | null }[]) => void;
}

const TradePostCreate = ({
  values,
  handleClose,
  handleSubmit,
  handleChange,
  imgObject,
  setImgObject,
}: TradePostCreateProps) => {
  const { isDisabled, throttle } = useThrottle(5000);
  return (
    <S.ModalOuterLayout>
      <S.ModalLayout>
        <S.ModalHeader>
          <S.ModalClose onClick={handleClose}>닫기</S.ModalClose>
          <S.ModalTitle>중고거래 글쓰기</S.ModalTitle>
          <S.ModalSubmit onClick={() => throttle(handleSubmit)}>
            완료
          </S.ModalSubmit>
        </S.ModalHeader>
        <S.PostTitle
          placeholder="글제목"
          required
          name="title"
          value={values?.title}
          type="text"
          onChange={handleChange}
        />
        <S.PostDesc
          placeholder="중고거래 게시글 내용을 작성해주세요. (가품 및 판매 금지 품목은 게시가 제한될 수 있어요.)"
          required
          name="desc"
          value={values?.desc}
          onChange={handleChange}
        />

        <UploadImage imgObject={imgObject} setImgObject={setImgObject} />

        <S.PostPriceWrapper>
          <S.PostPriceUnit>₩</S.PostPriceUnit>
          <S.PostPrice
            placeholder="가격 (원)"
            required
            name="price"
            value={toStringNumberWithComma(String(values?.price))}
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

export default TradePostCreate;
