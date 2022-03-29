import classNames from 'classnames';
import ReviewsItem from './reviews-item/reviews-item';
import ReviewForm from './review-form/review-form';

type ReviewsProps = {
  className?: string;
}

function Reviews(props: ReviewsProps):JSX.Element {
  const {className} = props;
  const reviewsClassName = classNames('reviews', className);

  const reviewsCount = 1;

  return (
    <section className={reviewsClassName}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        <ReviewsItem />
        <ReviewsItem />
        <ReviewsItem />
      </ul>
      <ReviewForm
        onSubmit={(text, rating) => {
        //
        }}
      />
    </section>
  );
}

export default Reviews;
