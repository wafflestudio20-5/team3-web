import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../api';
import {
  requestDeleteNeighborhoodComment,
  requestNeighborhoodPost,
  requestPatchNeighborhoodComment,
} from '../../../../api/neighborhood';
import { accessToken, BASE_URL } from '../../../../constant';
import defaultProfile from '../../../../assets/default-profile.png';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setComments } from '../../../../store/slices/neighborhoodSlice';
import { User } from '../../../../types/users';
import { shortenLocation } from '../../../../utils/location';
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
}

export const Comment = ({
  commentId,
  postId,
  user,
  content,
  modifiedAt,
}: CommentProps) => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [input, setInput] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    if (accessToken) {
      // alert('댓글 수정');
      // TODO: 밑에 requestPatchNeighborhoodComment 수행 도중 auth/refresh 에서 403 오류가 뜹니다..ㅠㅠ
      requestPatchNeighborhoodComment(commentId, input, accessToken)
        .then(async () => {
          toast('댓글 수정이 완료되었습니다.');
          const res = (await requestNeighborhoodPost(
            postId,
            accessToken,
          )) as any;
          dispatch(setComments(res.data.comments));
          setIsEdit(false);
        })
        .catch(err => {
          alert('에러');
          console.log(err);
        });
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter') {
      if (!e.shiftKey) {
        handleEdit();
      }
    }
  };

  return (
    <>
      <S.CommentWrapper>
        <S.TopWrapper>
          <S.ProfileWrapper>
            <S.ProfileImage
              src={user.imgUrl === null ? defaultProfile : user.imgUrl}
            />
            <S.UserName>{user.username}</S.UserName>
            <S.Location>{shortenLocation(user.location)}</S.Location>
          </S.ProfileWrapper>

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
              onKeyPress={onKeyPress}
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
        <CommentDeleteModal
          postId={postId}
          commentId={commentId}
          handleClose={() => {
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </>
  );
};
