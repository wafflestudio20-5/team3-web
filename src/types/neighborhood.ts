export interface neighborPostInput {
  title: string;
  content: string;
}

export interface neighborPost {
  commentCount: number;
  comments: Array<string>;
  content: string;
  createdAt: Date;
  isLiked: boolean;
  isOwner: boolean;
  likeCount: number;
  modifiedAt: Date;
  postId: number;
  publisher: {
    id: number;
    email: string;
    username: string;
    imgUrl: string;
    location: string;
    temperature: number;
  };
  title: string;
  viewCount: number;
}
