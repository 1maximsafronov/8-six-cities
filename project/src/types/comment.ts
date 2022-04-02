export type CommentAuthor = {
  id: number | string;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type Comment = {
  id: number | string
  rating: number;
  comment: string;
  date: string;
  user: CommentAuthor;
};

export type Comments = Comment[];


export type CommentNew = {
  comment: string;
  rating: number;
}
