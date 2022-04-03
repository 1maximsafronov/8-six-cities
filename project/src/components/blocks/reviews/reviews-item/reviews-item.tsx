import {Comment} from 'types/comment';
import { formatCommentDate, formateDateTime } from 'utils/common';


function ReviewsItem({review}: ReviewItemProps):JSX.Element {
  const {user: author, comment:text, rating, date} = review;

  const ratingToPercent = 20 * rating;

  const commentDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={author.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{author.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingToPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        {/* <time className="reviews__time" dateTime="2019-04-24">April 2019</time> */}
        <time className="reviews__time" dateTime={formateDateTime(commentDate)}>{formatCommentDate(commentDate)}</time>
      </div>
    </li>
  );
}

type ReviewItemProps ={
  review: Comment
}

export default ReviewsItem;
