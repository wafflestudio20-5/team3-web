import { useEffect, useRef, useState } from 'react';
import { LONG_TEXT } from '../../../../constant';
import { AddButton } from '../../../../components/add-button';
import { AddModal } from '../add-modal';
import ModalWrapper from '../modal-wrapper';
import { ShortCut } from '../neighbor-shortcut';
import * as S from './neighbor-container.styled';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { requestNeighborhood } from '../../../../api/neighborhood';
import { neighborPost } from '../../../../types/neighborhood';
import { toast } from 'react-toastify';
import { redirectWithMsg } from '../../../../utils/errors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setPosts } from '../../../../store/slices/neighborhoodPostListSlice';

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  const pageNum = useRef(1);
  const [name, setName] = useState('');
  // const [posts, setPosts] = useState<Array<neighborPost>>([]);
  const posts = useAppSelector(state => state.neighborhoodPostList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(prev => !prev);
  };

  const getPosts = async () => {
    if (accessToken) {
      const res = (await requestNeighborhood(
        accessToken,
        pageNum.current,
        name,
      )) as any;
      dispatch(setPosts(res.data.reverse()));
    } else {
      redirectWithMsg(
        2,
        '액세스 토큰이 유효하지 않습니다. 다시 로그인해 주세요.',
        () => {
          navigate('/login');
        },
      );
    }
  };

  useEffect(() => {
    getPosts();
  }, [accessToken]);

  // useEffect(() => {
  //   if (accessToken) {
  //     dispatch(
  //       getNeighborhoodPostList({
  //         accessToken: accessToken,
  //         name: '',
  //         page: pageNum,
  //       }),
  //     )
  //       .unwrap()
  //       .then(res => {
  //         setPosts(res.reverse());
  //       })
  //       .catch(err => {
  //         if (axios.isAxiosError(err)) {
  //           if (err.response?.status === 404) {
  //             redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
  //           } else if (err.response?.status === 401) {
  //             // TODO: refresh 후 재요청
  //             redirectWithMsg(2, err.response?.data.error, () =>
  //               navigate('/login'),
  //             );
  //           } else {
  //             redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
  //               navigate('/'),
  //             );
  //           }
  //         }
  //       });
  //   }
  // }, [accessToken, pageNum]);

  const handleMoreButtonClick = async () => {
    if (accessToken) {
      pageNum.current++;
      const res = (await requestNeighborhood(
        accessToken,
        pageNum.current,
        name,
      )) as any;
      console.log(pageNum.current);
      dispatch(setPosts(res.data.reverse().concat(posts)));
    } else {
      redirectWithMsg(
        2,
        '액세스 토큰이 유효하지 않습니다. 다시 로그인해 주세요.',
        () => {
          navigate('/login');
        },
      );
    }
  };
  return (
    <>
      <S.Container>
        <S.TopTextWrapper>
          <S.TopText>동네정보</S.TopText>
        </S.TopTextWrapper>
        {posts
          ? posts.map(post => (
              <ShortCut
                key={post.postId}
                id={post.postId}
                content={post.title}
                location={post.publisher.location}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))
          : null}
        {/* <ShortCut content="1내용내용내용" location="주소주소주소" />
        <ShortCut
          content="2내용내용내용"
          location="주소주소주소"
          likeCount={7}
        />
        <ShortCut
          content={LONG_TEXT}
          location="주소주소주소"
          commentCount={5}
        />
        <ShortCut
          content="4내용내용내용"
          location="주소주소주소"
          likeCount={3}
          commentCount={10}
        />

        <ShortCut content="5내용내용내용" location="주소주소주소" />
        <ShortCut content="6내용내용내용" location="주소주소주소" />
        <ShortCut content="7내용내용내용" location="주소주소주소" />
        <ShortCut content="8내용내용내용" location="주소주소주소" /> */}
        <S.MoreTextWrapper onClick={handleMoreButtonClick}>
          <S.MoreText>더보기</S.MoreText>
        </S.MoreTextWrapper>
        <AddButton
          handleClick={() => {
            setIsModalOpen(prev => !prev);
          }}
        />
      </S.Container>
      {isModalOpen && (
        <ModalWrapper handleClose={handleModalClose}>
          <AddModal
            handleClose={() => {
              handleModalClose();
            }}
          />
        </ModalWrapper>
      )}
    </>
  );
};
