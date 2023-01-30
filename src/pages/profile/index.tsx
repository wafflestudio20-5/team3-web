import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import ChatItem from './components/chat-item';
import TxInfo from './container/transaction-info';
import ModalWrapper from '../../components/modal-wrapper';
import ContentFooter from '../../components/content-footer';
import NavigationButton from './components/navigation-button';

import { useAuth } from '../../hooks/useAuth';
import { getMyChats } from '../../store/slices/chatSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import * as S from './profile.styled';
import buyIcon from '../../assets/buy-icon.svg';
import lifeIcon from '../../assets/life-icon.svg';
import likeIcon from '../../assets/like-icon.svg';
import sellIcon from '../../assets/sell-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import scopeWide from '../../assets/scope-wide.png';
import scopeNarrow from '../../assets/scope-narrow.png';
import scopeNormal from '../../assets/scope-normal.png';
import defaultImg from '../../assets/default-profile.png';
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sessionLoading } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const { me } = useAppSelector(state => state.users);
  const [openAreaModal, setOpenAreaModal] = useState(false);
  const { accessToken } = useAppSelector(state => state.session);
  const { myChats, unreadTotalCount } = useAppSelector(state => state.chat);

  const [rangeValue, setRangeValue] = useState(0);
  const [rangeImg, setRangeImg] = useState(scopeNarrow);
  const [rangeDistance, setRangeDistance] = useState(35);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  }, []);

  useEffect(() => {
    if (rangeValue === 0) {
      setRangeImg(scopeNarrow);
      setRangeDistance(35);
    } else if (rangeValue === 1) {
      setRangeImg(scopeNormal);
      setRangeDistance(200);
    } else if (rangeValue === 2) {
      setRangeImg(scopeWide);
      setRangeDistance(400);
    }
  }, [rangeValue]);

  const [edit, setEdit] = useState({
    img: false,
    username: false,
    password: false,
    location: false,
  });

  useEffect(() => {
    if (accessToken) {
      dispatch(getMyChats(accessToken))
        .unwrap()
        .then(() => {
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }

    // DESC: polling 이용해 구현
    const polling = setInterval(() => {
      if (accessToken) {
        dispatch(getMyChats(accessToken))
          .unwrap()
          .then(() => {
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 3000);

    return () => {
      clearInterval(polling);
    };
  }, [accessToken, modalOpen]);

  return (
    <S.OuterWrapper>
      <Gnb isColored />

      <S.Wrapper>
        <S.ContentWrapper>
          <Header
            username={me?.username || null}
            handleClick={() => setModalOpen(true)}
            isLoading={sessionLoading}
            unread={unreadTotalCount}
          />
          <S.InfoWrapper>
            <UserInfo
              me={me || null}
              edit={edit}
              isLoading={sessionLoading}
              setEdit={setEdit}
            />
            <TxInfo
              me={me || null}
              edit={edit}
              isLoading={sessionLoading}
              setEdit={setEdit}
              setOpenAreaModal={setOpenAreaModal}
            />
          </S.InfoWrapper>

          <S.NavigationWrapper>
            <NavigationButton
              isLoading={sessionLoading}
              img={sellIcon}
              text="판매내역"
              handleClick={() => navigate('/profile/me/sell')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={buyIcon}
              text="구매내역"
              handleClick={() => navigate('/profile/me/buy')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={likeIcon}
              text="찜한 상품"
              handleClick={() => navigate('/profile/me/like')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={reviewIcon}
              text="거래후기"
              handleClick={() => navigate('/profile/me/review')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={mannerCommentIcon}
              text="매너평가"
              handleClick={() => navigate('/')}
            />
            <NavigationButton
              isLoading={sessionLoading}
              img={lifeIcon}
              text="동네생활"
              handleClick={() => navigate('/')}
            />
          </S.NavigationWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
      <ContentFooter />

      {modalOpen && (
        <ModalWrapper handleClose={() => setModalOpen(false)}>
          <>
            <S.Header>채팅목록</S.Header>
            {!myChats || !(myChats?.length > 0) ? (
              <S.DefaultAnnounce>
                🥕 현재 진행 중인 채팅이 없습니다.
              </S.DefaultAnnounce>
            ) : (
              <S.ModalInnerWrapper>
                {myChats && myChats?.length > 0 ? (
                  myChats?.map((chat: any, index: number) => {
                    return (
                      <ChatItem
                        chat={chat}
                        key={
                          String(chat?.you?.id) +
                          chat?.you?.email +
                          String(index)
                        }
                        handleClick={() =>
                          navigate(
                            `/chat/messages/${chat.roomUUID}/${chat?.you?.id}/${chat?.post.postId}`,
                          )
                        }
                      />
                    );
                  })
                ) : (
                  <>로딩 중...</>
                )}
              </S.ModalInnerWrapper>
            )}
          </>
        </ModalWrapper>
      )}

      {openAreaModal && (
        <ModalWrapper handleClose={() => setOpenAreaModal(false)}>
          <S.DisplayWrapper>
            <S.HeaderWrapper>
              <S.RangeTitle>동네 범위 선택</S.RangeTitle>
              <S.SubmitRange onClick={() => alert('변경')}>변경하기</S.SubmitRange>
            </S.HeaderWrapper>
            <S.RangeAnnounce>
              선택한 범위의 게시글만 볼 수 있어요.
            </S.RangeAnnounce>
            <S.RangeAnnounceTitle>{`내 주소 근처 ${rangeDistance}km`}</S.RangeAnnounceTitle>
            <S.Range
              type="range"
              min="true"
              max="2"
              value={rangeValue}
              onChange={handleChange}
            />
            <S.RangeDesc>
              <S.Desc>가까운 동네</S.Desc>
              <S.Desc>먼 동네</S.Desc>
            </S.RangeDesc>
            <S.ScopeImg src={rangeImg || defaultImg} alt="scope" />
          </S.DisplayWrapper>
        </ModalWrapper>
      )}
    </S.OuterWrapper>
  );
};

export default ProfilePage;
