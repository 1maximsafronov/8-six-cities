import { Hotel, Hotels, HotelsByCity } from 'types/hotel';
import LocationsItems from '../favorites-locations-items/favorites-locations-items';

const restructureFavorites = (hotels:Hotels): HotelsByCity => {
  const hotelsByCity:HotelsByCity = hotels.reduce((acc:HotelsByCity, hotel: Hotel) => {
    const hotelCity = hotel.city.name;

    if (hotelCity in acc) {
      acc[hotelCity].push(hotel);
    } else {
      acc[hotelCity] = [hotel];
    }

    return acc;

  }, {});

  return hotelsByCity;
};

function FavoritesList({hotels}:FavoritesListProps):JSX.Element {
  const hotelyByCity:HotelsByCity = restructureFavorites(hotels);
  const locations = Object.keys(hotelyByCity);

  return (
    <ul className="favorites__list">
      {locations.map((location) => (
        <LocationsItems
          key={`city-${location}`}
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
