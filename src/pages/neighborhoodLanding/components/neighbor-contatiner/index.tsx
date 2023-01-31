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
import { devNull } from 'os';
import Spinner from '../../../../components/spinner';

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  const pageNum = useRef(1);
  const [keyword, setKeyword] = useState('');
  // const [posts, setPosts] = useState<Array<neighborPost>>([]);
  const posts = useAppSelector(state => state.neighborhoodPostList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      dispatch(setPosts(res.data.posts));
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
  }, [accessToken, keyword]);

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
                    isLiked={post.isLiked}
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
      )}
    </>
  );
};
