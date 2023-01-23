import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestNeighborhoodPost } from '../../api/neighborhood';
import Gnb from '../../components/gnb';
import { LONG_TEXT } from '../../constant';
import { useAppSelector } from '../../store/hooks';
import { neighborPost } from '../../types/neighborhood';
import { User } from '../../types/users';
import { Comment } from './components/comment';
import { CommentLikeCount } from './components/comment-like-count';
import { Description } from './components/desc-container';
import { WriterInfo } from './components/writer-info';
import { Container } from './neighbor-post-styled';

export const NeighborhoodPostPage = () => {
  const { id } = useParams();
  const { accessToken } = useAppSelector(state => state.session);
  const [post, setPost] = useState<neighborPost>({} as neighborPost);

  const getPost = async () => {
    if (accessToken && id) {
      const res = (await requestNeighborhoodPost(id, accessToken)) as any;
      // console.log(res);
      setPost(res.data);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  const writer: User = {
    id: 1,
    username: 'lerry',
    email: '123@gmail.com',
    location: '서울 관악구 봉천동',
    temperature: 37.8,
    imgUrl:
      'https://i.ytimg.com/vi/HJ6mfzCh1_A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXouyVg57RxkROo4Fo2EMluMFXAA',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const writer2: User = {
    id: 2,
    username: 'rod',
    email: '1234@gmail.com',
    location: '서울 관악구 봉천동',
    temperature: 39.1,
    imgUrl: 'https://avatars.githubusercontent.com/u/109863663?s=60&v=4',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <>
      <Gnb />
      <Container>
        <WriterInfo
          userId={post.publisher?.id}
          username={post.publisher?.username}
          location={post.publisher?.location}
          temperature={post.publisher?.temperature}
          imgUrl={post.publisher?.imgUrl}
        />
        <Description
          title={post.title}
          content={post.content}
          modifiedAt={post.createdAt}
          viewCount={post.viewCount}
        />
        <CommentLikeCount commentCount={2} likeCount={1} />
        <Comment user={writer} content="안녕하세요" modifiedAt={new Date()} />
        <Comment user={writer2} content="반가워요" modifiedAt={new Date()} />
      </Container>
    </>
  );
};
