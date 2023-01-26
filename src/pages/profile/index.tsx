import { useEffect, useState } from 'react';
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
import mannerCommentIcon from '../../assets/manner-comment-icon.svg';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sessionLoading } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const { me } = useAppSelector(state => state.users);
  const { myChats } = useAppSelector(state => state.chat);
  const { accessToken } = useAppSelector(state => state.session);
  const [orderedChats, setOrderedChats] = useState();

  const [edit, setEdit] = useState({
    img: false,
    username: false,
    password: false,
    location: false,
  });

  useEffect(() => {
    if (modalOpen && accessToken) {
      dispatch(getMyChats(accessToken))
        .unwrap()
        .then(() => {
          // console.log('성공');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [modalOpen, accessToken]);

  return (
    <S.OuterWrapper>
      <Gnb isColored />

      <S.Wrapper>
        <S.ContentWrapper>
          <Header
            username={me?.username || null}
            handleClick={() => setModalOpen(true)}
            isLoading={sessionLoading}
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
                        key={String(chat?.buyer?.id) + chat?.buyer?.email + String(index)}
                        handleClick={() =>
                          navigate(
                            `/chat/messages/${chat.roomUUID}/${
                              !chat?.post?.isOnwer
                                ? chat?.post.seller.id
                                : chat?.buyer.id
                            }`,
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
    </S.OuterWrapper>
  );
};

export default ProfilePage;
