import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import Gnb from '../../components/gnb';
import Header from './components/header';
import UserInfo from './container/user-info';
import ChatItem from './components/chat-item';
import TxInfo from './container/transaction-info';
import ModalWrapper from '../../components/modal-wrapper';
import ContentFooter from '../../components/content-footer';
import NavigationButton from './components/navigation-button';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';
import { useAuth } from '../../hooks/useAuth';
import { loadItem } from '../../utils/storage';
import { SearchScope } from '../../types/users';
import { getMyChats } from '../../store/slices/chatSlice';
import { normalToast } from '../../utils/basic-toast-modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import * as S from './profile.styled';
import buyIcon from '../../assets/buy-icon.svg';
import lifeIcon from '../../assets/life-icon.svg';
import likeIcon from '../../assets/like-icon.svg';
import sellIcon from '../../assets/sell-icon.svg';
import reviewIcon from '../../assets/review-icon.svg';
import scopeWide from '../../assets/scopewide.png';
import scopeNarrow from '../../assets/scopenarrow.png';
import scopeNormal from '../../assets/scopenormal.png';
import Spinner from '../../components/spinner';
import { ChatType } from '../../types/chat';

const ProfilePage = () => {
  const { me, isAuthed, sessionLoading } = useAuth();
  const accessToken = loadItem('accessToken');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [openAreaModal, setOpenAreaModal] = useState(false);
  const { myChats, unreadTotalCount } = useAppSelector(state => state.chat);

  const [rangeValue, setRangeValue] = useState<number>();
  const [rangeImg, setRangeImg] = useState<string>();
  const [rangeDistance, setRangeDistance] = useState<number>();
  const [searchScope, setSearchScope] = useState<SearchScope>();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  }, []);

  useEffect(() => {
    if (me?.searchScope === SearchScope.NARROW) {
      setRangeImg(scopeNarrow);
      setRangeDistance(35);
      setSearchScope(SearchScope.NARROW);
      setRangeValue(0);
    } else if (me?.searchScope === SearchScope.NORMAL) {
      setRangeImg(scopeNormal);
      setRangeDistance(200);
      setSearchScope(SearchScope.NORMAL);
      setRangeValue(1);
    } else if (me?.searchScope === SearchScope.WIDE) {
      setRangeImg(scopeWide);
      setRangeDistance(400);
      setSearchScope(SearchScope.WIDE);
      setRangeValue(2);
    }
  }, [me]);

  const handleSubmit = async () => {
    if (accessToken) {
      try {
        await axios.patch(
          `${BASE_URL}/users/me/search-scope`,
          { searchScope },
          { headers: auth(accessToken) },
        );
        setOpenAreaModal(false);
        toast.success('?????? ????????? ?????????????????????.');
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (rangeValue === 0) {
      setRangeImg(scopeNarrow);
      setRangeDistance(35);
      setSearchScope(SearchScope.NARROW);
    } else if (rangeValue === 1) {
      setRangeImg(scopeNormal);
      setRangeDistance(200);
      setSearchScope(SearchScope.NORMAL);
    } else if (rangeValue === 2) {
      setRangeImg(scopeWide);
      setRangeDistance(400);
      setSearchScope(SearchScope.WIDE);
    }
  }, [rangeValue, me?.searchScope]);

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

    // DESC: polling ????????? ??????
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

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('???????????? ???????????????.');
  }

  return (
    <S.OuterWrapper>
      {sessionLoading || !me || !isAuthed ? (
        <Spinner />
      ) : (
        <>
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
                  text="????????????"
                  handleClick={() => navigate('/profile/me/sell')}
                />
                <NavigationButton
                  isLoading={sessionLoading}
                  img={buyIcon}
                  text="????????????"
                  handleClick={() => navigate('/profile/me/buy')}
                />
                <NavigationButton
                  isLoading={sessionLoading}
                  img={likeIcon}
                  text="?????? ??????"
                  handleClick={() => navigate('/profile/me/like')}
                />
                <NavigationButton
                  isLoading={sessionLoading}
                  img={reviewIcon}
                  text="????????????"
                  handleClick={() => navigate('/profile/me/review')}
                />
                <NavigationButton
                  isLoading={sessionLoading}
                  img={lifeIcon}
                  text="????????????"
                  handleClick={() => navigate('/profile/me/neighborhood')}
                />
                <NavigationButton
                  isLoading={sessionLoading}
                  img={likeIcon}
                  text="?????? ????????????"
                  handleClick={() => navigate('/profile/me/neighborhoodlike')}
                />
              </S.NavigationWrapper>
            </S.ContentWrapper>
          </S.Wrapper>
          <ContentFooter />
        </>
      )}

      {modalOpen && (
        <ModalWrapper handleClose={() => setModalOpen(false)}>
          <>
            <S.Header>????????????</S.Header>
            {!myChats || !(myChats?.length > 0) ? (
              <S.DefaultAnnounce>
                ???? ?????? ?????? ?????? ????????? ????????????.
              </S.DefaultAnnounce>
            ) : (
              <S.ModalInnerWrapper>
                {myChats && myChats?.length > 0 ? (
                  myChats?.map((chat: ChatType, index: number) => {
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
                            `/chat/messages/${chat?.roomUUID}/${chat?.you?.id}/${chat?.post?.postId}`,
                          )
                        }
                      />
                    );
                  })
                ) : (
                  <>?????? ???...</>
                )}
              </S.ModalInnerWrapper>
            )}
          </>
        </ModalWrapper>
      )}

      {openAreaModal && me?.searchScope && (
        <ModalWrapper handleClose={() => setOpenAreaModal(false)}>
          <S.DisplayWrapper>
            <S.HeaderWrapper>
              <S.RangeTitle>?????? ?????? ??????</S.RangeTitle>
              <S.SubmitRange onClick={handleSubmit}>????????????</S.SubmitRange>
            </S.HeaderWrapper>
            <S.RangeAnnounce>
              ????????? ????????? ???????????? ??? ??? ?????????.
            </S.RangeAnnounce>
            <S.RangeAnnounceTitle>{`??? ?????? ?????? ${rangeDistance}km`}</S.RangeAnnounceTitle>
            <S.Range
              type="range"
              min="true"
              max="2"
              value={rangeValue}
              onChange={handleChange}
            />
            <S.RangeDesc>
              <S.Desc>????????? ??????</S.Desc>
              <S.Desc>??? ??????</S.Desc>
            </S.RangeDesc>
            <S.ScopeImg src={rangeImg} alt="scope" />
          </S.DisplayWrapper>
        </ModalWrapper>
      )}
    </S.OuterWrapper>
  );
};

export default ProfilePage;
