import Gnb from '../../components/gnb';
import { LONG_TEXT } from '../../constant';
import { User } from '../../types/users';
import { Comment } from './components/comment';
import { Description } from './components/desc-container';
import { WriterInfo } from './components/writer-info';
import { Container } from './neighbor-post-styled';

export const NeighborhoodPostPage = () => {
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
        <WriterInfo />
        <Description
          content={LONG_TEXT}
          modifiedAt={new Date()}
          viewCount={120}
        />
        <Comment user={writer} content="안녕하세요" modifiedAt={new Date()} />
        <Comment user={writer2} content="반가워요" modifiedAt={new Date()} />
      </Container>
    </>
  );
};
