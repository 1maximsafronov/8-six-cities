import classNames from 'classnames';
import { Link } from 'react-router-dom';

function FavoritesCard():JSX.Element {

  const id = 1;
  const price = 180;
  const title = 'Nice, cozy, warm big bed apartment';
  const type = 'Apartment';
  const previewImage = 'img/apartment-small-03.jpg';
  const rating = 5;
  const isFavorite = false;

  const percent = rating * 20;

  const bookmarClassName = classNames(
    'place-card__bookmark-button button',
    {'place-card__bookmark-button--active': isFavorite},
  );

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={`Place ${title}`} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarClassName} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${percent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
