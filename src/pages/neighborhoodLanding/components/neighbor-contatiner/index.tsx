import { useEffect, useState } from 'react';
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

export const NeighborContainer = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Array<neighborPost>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(prev => !prev);
  };

  const getPosts = async () => {
    if (accessToken) {
      const res = (await requestNeighborhood(accessToken)) as any;
      // console.log(res);
      setPosts(res.data);
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
    // console.log(posts);
  }, []);

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
        <S.MoreTextWrapper>
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
          <AddModal handleClose={handleModalClose} />
        </ModalWrapper>
      )}
    </>
  );
};
