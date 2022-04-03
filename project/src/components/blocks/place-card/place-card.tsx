import { Link } from 'react-router-dom';
import PlaceCardInfo from './place-card-info/place-card-info';
import type { Hotel } from 'types/hotel';
import classNames from 'classnames';


type PlaceCardProps = {
  hotel: Hotel;
  onHover?: () => void;
  className?: string;
}

function PlaceCard({hotel, onHover, className = '' }: PlaceCardProps):JSX.Element {
  const {rating, isPremium,isFavorite, previewImage, price, title, type, id} = hotel;

  const parentClassName = className.split('__')[0];

  const premiumMark = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const cardClassName = classNames(className, 'place-card');
  const imageWrapClassName = classNames(
    [`${parentClassName}__image-wrapper`, 'place-card__image-wrapper'],
  );

  return (
    <article onMouseEnter={onHover} className={cardClassName}>
      {isPremium && premiumMark}
      <div className={imageWrapClassName}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={`Place ${title}`} />
        </Link>
      </div>

      <PlaceCardInfo
        id={id}
        type={type}
        title={title}
        price={price}
        rating={rating}
        isFavorite={isFavorite}
      />
    </article>
  );
}

export default PlaceCard;
