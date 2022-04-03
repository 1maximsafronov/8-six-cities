import { Link } from 'react-router-dom';
import { Hotel } from 'types/hotel';
import PlaceCardInfo from 'components/blocks/place-card/place-card-info/place-card-info';

function FavoritesCard({hotel}:Props):JSX.Element {
  const {id, price,title,type,previewImage,rating,isFavorite ,isPremium} = hotel;

  const premiumMark = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );


  return (
    <article className="favorites__card place-card">
      {isPremium && premiumMark}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={`Place ${title}`} />
        </Link>
      </div>

      <PlaceCardInfo className='favorites__card-info'
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

type Props = {
  hotel: Hotel
}

export default FavoritesCard;
