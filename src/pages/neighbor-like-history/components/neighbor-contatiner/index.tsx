import { useEffect, useRef, useState } from 'react';
import { LONG_TEXT } from '../../../../constant';
import { AddButton } from '../../../../components/add-button';
import { AddModal } from '../add-modal';
import ModalWrapper from '../modal-wrapper';
import { ShortCut } from '../neighbor-shortcut';
import * as S from './neighbor-container.styled';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  requestMyLikeNeighborhood,
  requestMyNeighborhood,
  requestNeighborhood,
} from '../../../../api/neighborhood';
import { neighborPost } from '../../../../types/neighborhood';
import { toast } from 'react-toastify';
import { redirectWithMsg } from '../../../../utils/errors';
import { useNavigate } from 'react-router-dom';
import { loadItem } from '../../../../utils/storage';
import axios from 'axios';
import { setPosts } from '../../../../store/slices/neighborhoodPostListSlice';
import SearchBar from '../search-bar';
import Spinner from '../../../../components/spinner';

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  const { me } = useAppSelector(state => state.users);
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

  // DESC: 현재 keyword 기능은 api에 반영되어 있지 않으나, 추후 반영 가능성 고려하여 요청 함수를 작성해두었습니다
  const getPosts = async () => {
    if (me && accessToken) {
      const res = (await requestMyLikeNeighborhood(
        accessToken,
        pageNum.current,
        keyword,
      )) as any;
      console.log(res);
      setIsLoading(false);
      dispatch(setPosts(res.data.posts));
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

  // TODO: api에 페이지네이션 추가되면 반영 (현재는 내가 작성한 모든 글이 한 번에 불러와짐)
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
            <S.TopText>{me?.username} 님이 좋아한 동네생활</S.TopText>
          </S.TopTextWrapper>
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
          </S.Container>
        </>
      )}
    </>
  );
};
