import classNames from 'classnames';
import ReviewsItem from './reviews-item/reviews-item';
import ReviewForm from './review-form/review-form';
import {Comments} from 'types/comment';
import { useAppSelector } from 'hooks';
import { isUserAuthorized } from 'store/selectors';

type ReviewsSectionProps = {
  className?: string;
  reviews: Comments;
};

function ReviewsSection(props: ReviewsSectionProps):JSX.Element {
  const {className, reviews} = props;
  const isAuth = useAppSelector(isUserAuthorized);
  const reviewsCount = reviews.length;
  const reviewsClassName = classNames('reviews', className);

  return (
    <section className={reviewsClassName}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, id) => (
          <ReviewsItem
            key={`review-${review.id}`}
            review={review}
          />
        ))}
      </ul>
      {isAuth && (
        <ReviewForm
          onSubmit={(text, rating) => {
            //
          }}
        />
      )}

    </section>
  );
}

export default ReviewsSection;
