import PlaceCard from '../place-card/place-card';
import {Hotels} from 'types/hotel';
import { useAppDispatch } from 'hooks';
import { addToFavorite, fetchHotels } from 'store/api-actions';

type PlacesListProps = {
  offers: Hotels;
  onCardHover: (id: number | string) => void
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {offers, onCardHover} = props;

  const dispatch = useAppDispatch();

  const hanldeFavoriteClick = (id: string | number, status: number) => {
    dispatch(addToFavorite({hotelId: id, status: status}))
      .then(() => dispatch(fetchHotels()));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((hotel) => {
        const keyValue = `hotel-${hotel.id}`;
        return(
          <PlaceCard className='cities__place-card'
            key={keyValue}
            hotel={hotel}
            onHover={() => onCardHover(hotel.id)}
            onFavoriteClick={() => {
              hanldeFavoriteClick(hotel.id, hotel.isFavorite ? 0 : 1);
            }}
          />
        );
      })}
    </div>
  );
}

export default PlacesList;
