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
import SearchBar from '../search-bar';

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  const pageNum = useRef(1);
  const [keyword, setKeyword] = useState('');
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
        keyword,
      )) as any;
      dispatch(setPosts(res.data));
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
    const timer = setTimeout(() => {
      getPosts();
    }, 300);

    return () => clearTimeout(timer);
  }, [accessToken, keyword]);

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
        keyword,
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
      <S.TopTextWrapper>
        <S.TopText>동네정보</S.TopText>
      </S.TopTextWrapper>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        searchClick={() => {
          console.log('clicked');
        }}
        dong="내 동네"
      />
      <S.Container>
        {posts
          ? posts.map(post => (
              <ShortCut
                key={post.postId}
                id={post.postId}
                content={post.content}
                location={post.publisher.location}
                modifiedAt={post.modifiedAt}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))
          : null}

        <AddButton
          handleClick={() => {
            setIsModalOpen(prev => !prev);
          }}
        />
        {isModalOpen && (
          <ModalWrapper handleClose={handleModalClose}>
            <AddModal
              handleClose={() => {
                handleModalClose();
              }}
            />
          </ModalWrapper>
        )}
      </S.Container>
    </>
  );
};
