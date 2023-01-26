import { User } from './users';

export interface neighborPostInput {
  title: string;
  content: string;
}

export interface neighborPost {
  commentCount: number;
  comments: Array<comment>;
  content: string;
  createdAt: Date;
  isLiked: boolean;
  isOwner: boolean;
  likeCount: number;
  modifiedAt: Date;
  postId: number;
  publisher: User;
  title: string;
  viewCount: number;
}

export interface neighborPostComment {
  comment: string;
  isHidden: boolean;
}

export interface comment {
  comment: string;
  commentId: number;
  commenter: User;
  createdAt: Date;
  isHidden: boolean;
  isOwner: boolean;
  modifiedAt: Date;
}
