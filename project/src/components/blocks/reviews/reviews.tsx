import classNames from 'classnames';
import ReviewsItem from './reviews-item/reviews-item';
import ReviewForm from './review-form/review-form';
import type {Reviews} from '../../../types/reviews';

type ReviewsSectionProps = {
  className?: string;
  reviews: Reviews;
}

function ReviewsSection(props: ReviewsSectionProps):JSX.Element {
  const {className, reviews} = props;
  const reviewsClassName = classNames('reviews', className);

  const reviewsCount = reviews.length;

  return (
    <section className={reviewsClassName}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, id) => (
          <ReviewsItem
            key={`review-${review.rating}`}
            review={review}
          />
        ))}
      </ul>
      <ReviewForm
        onSubmit={(text, rating) => {
        //
        }}
      />
    </section>
  );
}

export default ReviewsSection;
