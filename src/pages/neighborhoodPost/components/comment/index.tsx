import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  requestDeleteNeighborhoodComment,
  requestPatchNeighborhoodComment,
} from '../../../../api/neighborhood';
import { accessToken } from '../../../../constant';
import { shortenLocation } from '../../../../functions/location';
import { useAppSelector } from '../../../../store/hooks';
import { User } from '../../../../types/users';
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
  const { me } = useAppSelector(state => state.users);
  const { accessToken } = useAppSelector(state => state.session);
  const [input, setInput] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEdit = async () => {
    if (accessToken) {
      const res = await requestPatchNeighborhoodComment(
        commentId,
        input,
        accessToken,
      );
      console.log(res);
      toast('댓글 수정이 완료되었습니다.');
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
