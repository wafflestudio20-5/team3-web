import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

import Button from '../button';
import {
  getTradeStatusKo,
  toStringNumWithComma,
} from '../../../../utils/tradePost';

import * as S from './description.styled';
import price from '../../../../assets/price.svg';
import daangn from '../../../../assets/marker.png';

const Description = () => {
  useEffect(() => {
    moment.locale('ko');
  }, []);

  // const tradePost = useAppSelector(state => state.tradePost);
  const [tradePost] = useState({
    postId: 1,
    title: '닌텐도 팝니다.',
    desc: '엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content. 엄청 긴 content.',
    price: 30000,
    likeCount: 3,
    isLiked: false,
    isOwner: true,
    createdAt: new Date(),
    modifiedAt: new Date(),
    seller: {
      id: 1,
      username: 'lerry',
      email: '123@gmail.com',
      location: '서울 관악구 봉천동',
      temperature: 37.8,
      imgUrl:
        'https://i.ytimg.com/vi/HJ6mfzCh1_A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXouyVg57RxkROo4Fo2EMluMFXAA',
    },
    buyer: null,
    reservationCount: 3,
    tradeStatus: 'TRADING',
    viewCount: 10,

    // TODO: 🥕 later...
    otherPosts: null,
    imgUrls: null,
  });

  return (
    <S.Wrapper>
      <S.OptionWrapper>
        <S.TradeStatus>
          {getTradeStatusKo(tradePost?.tradeStatus)}
        </S.TradeStatus>

        <S.ChatWrapper>
          {/* TODO: 수정 아이콘, 좋아요 아이콘 */}
          {tradePost?.isOwner ? <></> : <></>}
          {tradePost?.isLiked ? <></> : <></>}
          <Button
            bgColor="#ff6f0f"
            handleClick={() => console.log('예악자 정하기 및 채팅 모달')}
            text={
              tradePost?.isOwner
                ? `대화 중인 채팅방 (${tradePost?.reservationCount})`
                : '채팅하기'
            }
          />
        </S.ChatWrapper>
      </S.OptionWrapper>

      <S.TitleWrapper>
        <S.Title>{tradePost?.title}</S.Title>
        <S.TitleImg src={daangn} alt="logo" />

        <S.Date>{`∙ ${moment(tradePost?.modifiedAt).fromNow()}`}</S.Date>
      </S.TitleWrapper>

      <S.Price>
        <S.PriceImg src={price} alt="price" />
        {`${toStringNumWithComma(tradePost?.price)}원`}
      </S.Price>

      <S.Desc>{tradePost?.desc}</S.Desc>

      <S.DetailInfo>
        <S.DetailText>{`관심 ${tradePost?.likeCount}`}</S.DetailText>
        <S.DetailText>{`∙ 채팅 ${tradePost?.reservationCount}`}</S.DetailText>
        <S.DetailText>{`∙ 조회 ${tradePost?.viewCount}`}</S.DetailText>
      </S.DetailInfo>
    </S.Wrapper>
  );
};

export default Description;
