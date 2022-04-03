import { Hotel, Hotels } from 'types/hotel';
import PlaceCard from 'components/blocks/place-card/place-card';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addToFavorite, fetchNearbyHotels } from 'store/api-actions';
import { isUserAuthorized } from 'store/selectors';
import { redirectToRoute } from 'store/action';
import { AppRoute } from 'const';

const getStatus = (isFavorite: boolean) => isFavorite ? 0 : 1;

function NearPlaces({hotels, currentHotel}: NearPlacesProps):JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isUserAuthorized);

  const onFavoriteClick = (hotelId: string | number, isFavorite: boolean) => {
    if (isAuth) {
      dispatch(
        addToFavorite({hotelId, status: getStatus(isFavorite)}),
      )
        .then(() => dispatch(fetchNearbyHotels(currentHotel.id)));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }

  };

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {hotels.map((hotel) => (
          <PlaceCard
            className='near-places__card'
            key={`hotel-${hotel.id}`}
            hotel={hotel}
            onFavoriteClick={() => onFavoriteClick(hotel.id, hotel.isFavorite)}
          />
        ))}
      </div>
    </section>
  );
}

type NearPlacesProps = {
  hotels:Hotels;
  currentHotel: Hotel
}

export default NearPlaces;
