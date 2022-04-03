import { Link } from 'react-router-dom';
import classNames from 'classnames';

function PlaceCardInfo(props: PlaceCardInfoProps):JSX.Element {
  const {id, price, type, rating, isFavorite, title, className} = props;
  const ratingToPercent = 20*rating;


  const infoClassName = classNames(className, 'place-card__info');

  const bookmarkBtnClass = classNames(
    'place-card__bookmark-button button',
    {'place-card__bookmark-button--active' : isFavorite},
  );

  return (
    <div className={infoClassName}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkBtnClass} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${ratingToPercent}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}


type PlaceCardInfoProps = {
  id: number | string;
  type: string;
  price: number;
  title: string;
  rating: number;
  isFavorite:boolean;
  className?: string;
}

export default PlaceCardInfo;
