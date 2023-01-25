import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../api';
import {
  requestDeleteNeighborhoodComment,
  requestPatchNeighborhoodComment,
} from '../../../../api/neighborhood';
import { accessToken, BASE_URL } from '../../../../constant';

import { useAppSelector } from '../../../../store/hooks';
import { User } from '../../../../types/users';
import { shortenLocation } from '../../../../utils/location';
import ModalWrapper from '../../../neighborhoodLanding/components/modal-wrapper';
import { CommentDeleteModal } from '../comment-delete-modal';
import { DeleteModal } from '../delete-modal';
import { EditDelete } from '../edit-and-delete';
import * as S from './comment.styled';

interface CommentProps {
  commentId: number;
  postId: number;
  user: User;
  content: string;
  modifiedAt: Date;
  refreshPost: () => void;
}

export const Comment = ({
  commentId,
  postId,
  user,
  content,
  modifiedAt,
  refreshPost,
}: CommentProps) => {
  // const { me } = useAppSelector(state => state.users);
  // const { accessToken } = useAppSelector(state => state.session);
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [input, setInput] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEdit = async () => {
    if (accessToken) {
      // alert('댓글 수정');
      // TODO: 밑에 requestPatchNeighborhoodComment 수행 도중 auth/refresh 에서 403 오류가 뜹니다..ㅠㅠ
      requestPatchNeighborhoodComment(commentId, input, accessToken)
        .then(() => {
          // 아래 then 과 catch 문 모두 실행되지 않습니다..
          toast('댓글 수정이 완료되었습니다.');
          navigate(-1);
        })
        .catch(err => {
          alert('에러');
          console.log(err);
        });
    }
  };

  return (
    <>
      <S.CommentWrapper>
        <S.TopWrapper>
          <S.ProfileImage src={user.imgUrl || undefined} />
          <S.UserName>{user.username}</S.UserName>
          <S.Location>{shortenLocation(user.location)}</S.Location>
          {user?.id === me?.id && (
            <S.EditDeleteWrapper>
              <EditDelete
                handleEditClick={() => {
                  // console.log('edit');
                  setIsEdit(prev => !prev);
                }}
                handleDeleteClick={() => {
                  // console.log('delete');
                  setIsDeleteModalOpen(true);
                }}
              />
            </S.EditDeleteWrapper>
          )}
        </S.TopWrapper>
        {isEdit ? (
          <S.Form>
            <S.EditText
              value={input}
              onChange={e => {
                setInput(e.target.value);
              }}
            />
            <S.ButtonWrapper>
              <S.ConfirmButton onClick={handleEdit}>수정</S.ConfirmButton>
              <S.CancelButton
                type="button"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                취소
              </S.CancelButton>
            </S.ButtonWrapper>
          </S.Form>
        ) : (
          <S.Content>{content}</S.Content>
        )}
        <S.Date>{`${moment(modifiedAt).fromNow()}`}</S.Date>
      </S.CommentWrapper>
      {isDeleteModalOpen && (
        <ModalWrapper handleClose={() => setIsDeleteModalOpen(false)}>
          <CommentDeleteModal
            commentId={commentId}
            handleClose={() => {
              setIsDeleteModalOpen(false);
            }}
          />
        </ModalWrapper>
      )}
    </>
  );
};
