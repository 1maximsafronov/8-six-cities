import { Hotels, HotelsByCity } from 'types/hotel';
import { restructureHotels } from 'utils/common';
import LocationsItems from '../favorites-locations-items/favorites-locations-items';

function FavoritesList({hotels}:FavoritesListProps):JSX.Element {
  const hotelyByCity:HotelsByCity = restructureHotels(hotels);
  const locations = Object.keys(hotelyByCity);

  return (
    <ul className="favorites__list">
      {locations.map((location) => (
        <LocationsItems key={`city-${location}`}
          location={location}
          hotels={hotelyByCity[location]}
        />
      ))}

    </ul>
  );
}

type FavoritesListProps = {
  hotels:Hotels;
}

export default FavoritesList;
