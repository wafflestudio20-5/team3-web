import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loadItem } from '../../../../utils/storage';
import { normalToast } from '../../../../utils/basic-toast-modal';
import { requestEditNeighborhood } from '../../../../api/neighborhood';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { neighborPost } from '../../../../types/neighborhood';

import * as S from './edit-modal.styled';

interface EditModalProps {
  post: neighborPost;
  handleClose: () => void;
}

export const EditModal = ({ post, handleClose }: EditModalProps) => {
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  // console.log(accessToken);

  const [inputs, setInputs] = useState({
    title: post?.title,
    content: post?.content,
  });
  const { title, content } = inputs;
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClick = async () => {
    if (!inputs.content.trim()) {
      normalToast('내용을 입력해주세요.');
      return;
    } else if (inputs.content.length < 5) {
      normalToast('내용은 5자 이상이어야 합니다.');
      return;
    } else if (inputs.content.length > 800) {
      normalToast('내용은 800자 이하여야 합니다.');
      return;
    }

    if (accessToken) {
      const res = await requestEditNeighborhood(
        post?.postId,
        { title, content },
        accessToken,
      );
      toast('글 수정이 완료되었습니다.');
      handleClose();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter') {
      if (!e.shiftKey) {
        handleClick();
      }
    }
  };

  useEffect(() => {
    () =>
      setInputs({
        title: post?.title,
        content: post?.content,
      });
  }, []);

  return (
    <S.Container>
      <S.TopWrapper>
        <S.SpanClose onClick={handleClose}>닫기</S.SpanClose>
        <S.SpanTitle>동네생활 글쓰기 수정</S.SpanTitle>
        <S.SpanComplete onClick={handleClick}>완료</S.SpanComplete>
      </S.TopWrapper>
      <S.DescWrapper>
        <S.Desc
          placeholder="우리 동네 관련된 질문이나 이야기를 해보세요."
          name="content"
          value={content}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </S.DescWrapper>
      <S.NoticeWrapper>
        <S.NoticeTitleSpan>글 작성하기 전에 알려드려요.</S.NoticeTitleSpan>
        <S.NoticeSpan>
          중고거래 관련 명예훼손 글은 올리실 수 없어요.
        </S.NoticeSpan>
      </S.NoticeWrapper>
    </S.Container>
  );
};
