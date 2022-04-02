import { Hotels } from 'types/hotel';
import FavoritesPlaces from '../favorites-places/favorites-places';

function FavoritesLocationsItems({location, hotels}:Props):JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <FavoritesPlaces
        hotels={hotels}
      />
    </li>
  );
}


type Props = {
  location: string;
  hotels: Hotels;
}

export default FavoritesLocationsItems;
