import classNames from 'classnames';
import { AppRoute } from 'const';
import {Link} from 'react-router-dom';
import { Hotel } from 'types/hotel';

function NearPlacesItem({hotel}: NearPlacesItemProps):JSX.Element {
  const {rating, price, title, type, previewImage, id, isFavorite} = hotel;

  const ratingToPercent = 20*rating;

  const bookmarkBtnClass = classNames(
    'place-card__bookmark-button button',
    {'place-card__bookmark-button--active' : isFavorite},
  );

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={`Place ${title}`} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkBtnClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

type NearPlacesItemProps = {
  hotel: Hotel
}

export default NearPlacesItem;
