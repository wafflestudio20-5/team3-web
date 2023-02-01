import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestNeighborhoodPost } from '../../api/neighborhood';
import ContentFooter from '../../components/content-footer';
import Gnb from '../../components/gnb';
import { LONG_TEXT } from '../../constant';
import { loadItem } from '../../utils/storage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPost } from '../../store/slices/neighborhoodPostSlice';
import { setComments } from '../../store/slices/neighborhoodSlice';
import { neighborPost, comment } from '../../types/neighborhood';
import { User } from '../../types/users';
import { AddModal } from '../neighborhoodLanding/components/add-modal';
import ModalWrapper from '../neighborhoodLanding/components/modal-wrapper';
import { Comment } from './components/comment';
import { CommentInput } from './components/comment-input';
import { CommentLikeCount } from './components/comment-like-count';
import { DeleteModal } from './components/delete-modal';
import { Description } from './components/desc-container';
import { EditDelete } from './components/edit-and-delete';
import { EditModal } from './components/edit-modal';
import { WriterInfo } from './components/writer-info';
import { CommentContainer, Container, Wrapper } from './neighbor-post-styled';

export const NeighborhoodPostPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  const { me } = useAppSelector(state => state.users);
  const post = useAppSelector(state => state.neighborhoodPost);
  // const [post, setPost] = useState<neighborPost>({} as neighborPost);
  // const [comments, setComments] = useState<Array<comment>>([]);
  const comments = useAppSelector(state => state.comments);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const getPost = async () => {
    if (accessToken) {
      const res = (await requestNeighborhoodPost(id, accessToken)) as any;
      // console.log(res);
      dispatch(setPost(res.data));
      // setComments(res.data.comments);
      dispatch(setComments(res.data.comments));
    }
  };

  useEffect(() => {
    getPost();
  }, [accessToken]);

  return (
    <Wrapper>
      <Gnb />
      <Container>
        <WriterInfo
          userId={post.publisher?.id}
          username={post.publisher?.username}
          location={post.publisher?.location}
          temperature={post.publisher?.temperature}
          imgUrl={post.publisher?.imgUrl}
        />
        {post.publisher?.id === me?.id && (
          <EditDelete
            handleEditClick={() => setIsEditModalOpen(true)}
            handleDeleteClick={() => {
              setIsDeleteModalOpen(true);
            }}
          />
        )}
        <Description
          title={post.title}
          content={post.content}
          modifiedAt={post.createdAt}
          viewCount={post.viewCount}
        />
        {/* <CommentLikeCount commentCount={2} likeCount={1} />
        <Comment user={writer} content="안녕하세요" modifiedAt={new Date()} />
        <Comment user={writer2} content="반가워요" modifiedAt={new Date()} /> */}
        <CommentLikeCount
          // isLiked={post.isLiked}
          postId={id}
          // commentCount={comments.length}
          // likeCount={post.likeCount}
        />
        <CommentInput postId={id} refreshPost={getPost} />
        <CommentContainer>
          {comments.map(comment => (
            <Comment
              key={comment.commentId}
              postId={id}
              commentId={comment.commentId}
              user={comment.commenter}
              content={comment.comment}
              modifiedAt={comment.modifiedAt}
            />
          ))}
        </CommentContainer>
      </Container>

      <ContentFooter />
      {isEditModalOpen && (
        <ModalWrapper handleClose={() => setIsEditModalOpen(false)}>
          <EditModal
            post={post}
            handleClose={() => {
              setIsEditModalOpen(false);
              getPost();
            }}
          />
        </ModalWrapper>
      )}
      {isDeleteModalOpen && (
        <ModalWrapper handleClose={() => setIsDeleteModalOpen(false)}>
          <DeleteModal
            post={post}
            handleClose={() => {
              setIsDeleteModalOpen(false);
              getPost();
            }}
          />
        </ModalWrapper>
      )}
    </Wrapper>
  );
};
