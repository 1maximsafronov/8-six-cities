import { Comment, ServerComment } from 'types/comment';


export const adapteCommentToClient = (serverComment: ServerComment):Comment => ({
  id: serverComment.id,
  rating: serverComment.rating,
  comment: serverComment.comment,
  date: serverComment.date,
  user: serverComment.user,
});
