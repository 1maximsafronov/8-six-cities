import { Link } from 'react-router-dom';
import classNames from 'classnames';
import BookmarkButton from '../place-card-bookmark-button/place-card-bookmark-button';

function PlaceCardInfo(props: PlaceCardInfoProps):JSX.Element {
  const {
    type,
    title,
    price,
    rating,
    hotelId,
    className,
    isFavorite,
    onFavoriteClick,
  } = props;

  const ratingToPercent = 20 * rating;

  return (
    <div className={classNames(className, 'place-card__info')}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkButton
          isActive={isFavorite}
          onClick={onFavoriteClick}
        />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${ratingToPercent}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${hotelId}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

type PlaceCardInfoProps = {
  hotelId: number | string;
  type: string;
  price: number;
  title: string;
  rating: number;
  isFavorite:boolean;
  className?: string;
  onFavoriteClick?: () => void;
}

export default PlaceCardInfo;
