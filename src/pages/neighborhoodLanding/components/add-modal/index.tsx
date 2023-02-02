import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import {
  requestNeighborhood,
  requestPostNeighborhood,
} from '../../../../api/neighborhood';
import { loadItem } from '../../../../utils/storage';
import { normalToast } from '../../../../utils/basic-toast-modal';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setPosts } from '../../../../store/slices/neighborhoodPostListSlice';

import * as S from './add-modal.styled';

interface AddModalProps {
  handleClose: () => void;
}

export const AddModal = ({ handleClose }: AddModalProps) => {
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  // console.log(accessToken);
  const posts = useAppSelector(state => state.neighborhoodPostList);
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
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
      const res = await requestPostNeighborhood({ title, content }, accessToken)
        .then(async () => {
          toast('글 작성이 완료되었습니다.');
          const res = (await requestNeighborhood(accessToken, 1, '')) as any;
          dispatch(setPosts(res.data.posts));
          handleClose();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.key == 'Enter') {
  //     if (!e.shiftKey) {
  //       handleClick();
  //     }
  //   }
  // };

  return (
    <S.Container>
      <S.TopWrapper>
        <S.SpanClose onClick={handleClose}>닫기</S.SpanClose>
        <S.SpanTitle>동네생활 글쓰기</S.SpanTitle>
        <S.SpanComplete onClick={handleClick}>완료</S.SpanComplete>
      </S.TopWrapper>

      <S.DescWrapper>
        <S.Desc
          required
          placeholder="우리 동네 관련된 질문이나 이야기를 해보세요."
          name="content"
          value={content}
          onChange={onChange}
          // onKeyPress={onKeyPress}
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
