import { Hotels } from 'types/hotel';
import PlaceCard from 'components/blocks/place-card/place-card';
import { useAppDispatch } from 'hooks';
import { addToFavorite, fetchFavoritesHotels } from 'store/api-actions';

const getStatus = (isFavorite: boolean) => isFavorite ? 0 : 1;

function FavoritesPlaces({hotels}:Props):JSX.Element {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = (hotelId: number | string, isFavorite: boolean) => {
    dispatch(addToFavorite({hotelId: hotelId, status: getStatus(isFavorite)}))
      .then(() => dispatch(fetchFavoritesHotels()));
  };

  return (
    <div className="favorites__places">
      {hotels.map((hotel) => (
        <PlaceCard className="favorites__card"
          key={`hotel-${hotel.id}`}
          hotel={hotel}
          imageWidth={150}
          imageHeight={110}
          infoClassName="favorites__card-info"
          onFavoriteClick={() => handleFavoriteClick(hotel.id, hotel.isFavorite)}
        />
      ))}
    </div>
  );
}

type Props = {
  hotels: Hotels;
}


export default FavoritesPlaces;
