import { Hotels } from 'types/hotel';
import Card from '../favorites-card/favorites-card';

function FavoritesPlaces({hotels}:Props):JSX.Element {
  return (
    <div className="favorites__places">
      {hotels.map((hotel) => (
        <Card
          key={`hotel-${hotel.id}`}
          hotel={hotel}
        />
      ))}
    </div>
  );
}

type Props = {
  hotels: Hotels;
}


export default FavoritesPlaces;
