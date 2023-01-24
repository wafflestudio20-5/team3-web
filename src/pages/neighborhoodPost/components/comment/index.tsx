import moment from 'moment';
import { shortenLocation } from '../../../../functions/location';
import { User } from '../../../../types/users';
import * as S from './comment.styled';

interface CommentProps {
  user: User;
  content: string;
  modifiedAt: Date;
}

export const Comment = ({ user, content, modifiedAt }: CommentProps) => {
  return (
    <S.CommentWrapper>
      <S.TopWrapper>
        <S.ProfileImage src={user.imgUrl || undefined} />
        <S.UserName>{user.username}</S.UserName>
        <S.Location>{shortenLocation(user.location)}</S.Location>
      </S.TopWrapper>
      <S.Content>{content}</S.Content>
      <S.Date>{`${moment(modifiedAt).fromNow()}`}</S.Date>
    </S.CommentWrapper>
  );
};
