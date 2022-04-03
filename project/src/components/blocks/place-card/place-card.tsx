import PlaceCardInfo from './place-card-info/place-card-info';
import type { Hotel } from 'types/hotel';
import PremiumMark from './place-card-premium-mark/place-card-premium-mark';
import PlaceCardImage from './place-card-image/place-card-image';

import classNames from 'classnames';


type PlaceCardProps = {
  hotel: Hotel;
  onHover?: () => void;
  className?: string;
  infoClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  onFavoriteClick?: () => void
}

function PlaceCard(props: PlaceCardProps):JSX.Element {
  const {
    hotel,
    onHover,
    className = '',
    infoClassName,
    imageWidth,
    imageHeight,
    onFavoriteClick,
  } = props;

  const parentClassName = className.split('__')[0];

  return (
    <article className={classNames(className, 'place-card')}
      onMouseEnter={onHover}
    >
      <PremiumMark isActive={hotel.isPremium}/>

      <PlaceCardImage className={`${parentClassName}__image-wrapper`}
        hotelId={hotel.id}
        alt={hotel.title}
        src={hotel.previewImage}
        width={imageWidth}
        height={imageHeight}
      />

      <PlaceCardInfo className={infoClassName}
        hotelId={hotel.id}
        type={hotel.type}
        title={hotel.title}
        price={hotel.price}
        rating={hotel.rating}
        isFavorite={hotel.isFavorite}
        onFavoriteClick={onFavoriteClick}
      />
    </article>
  );
}

export default PlaceCard;
