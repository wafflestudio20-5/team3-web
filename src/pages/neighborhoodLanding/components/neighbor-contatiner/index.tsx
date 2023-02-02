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
import { loadItem } from '../../../../utils/storage';
import { redirectWithMsg } from '../../../../utils/errors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setPosts } from '../../../../store/slices/neighborhoodPostListSlice';
import SearchBar from '../search-bar';
import { devNull } from 'os';
import Spinner from '../../../../components/spinner';
import Pagination from '../pagination';
import notFound from '../../../../assets/not-found.svg';
import { UTCtoKST } from '../../../../utils/location';

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  // const [posts, setPosts] = useState<Array<neighborPost>>([]);
  const posts = useAppSelector(state => state.neighborhoodPostList);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleModalClose = () => {
    setIsModalOpen(prev => !prev);
  };

  const getPosts = async () => {
    if (accessToken) {
      const res = (await requestNeighborhood(
        accessToken,
        page,
        keyword,
      )) as any;
      dispatch(setPosts(res.data.posts));
      setTotalPage(Math.ceil(res.data.paging?.total / res.data.paging?.limit));
      setIsLoading(false);
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
  }, [accessToken, page, keyword]);

  const changePage = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <S.TopTextWrapper>
            <S.TopText>동네생활</S.TopText>
          </S.TopTextWrapper>
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            searchClick={() => {
              console.log('');
            }}
            dong="내 동네"
          />
          <S.Container>
            {posts && posts?.length > 0 ? (
              posts.map(post => (
                <ShortCut
                  key={post.postId}
                  id={post.postId}
                  content={post.content}
                  location={post.publisher.location}
                  isLiked={post.isLiked}
                  createdAt={UTCtoKST(post.createdAt)}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                />
              ))
            ) : (
              <S.NotFoundWrapper>
                <S.NotFoundImg src={notFound} alt="notFound" />
              </S.NotFoundWrapper>
            )}
            {posts && posts?.length > 0 && (
              <Pagination total={totalPage} page={page} setPage={changePage} />
            )}

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
      )}
    </>
  );
};
