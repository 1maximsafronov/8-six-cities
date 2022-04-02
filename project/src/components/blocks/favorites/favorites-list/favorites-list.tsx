import LocationsItems from '../favorites-locations-items/favorites-locations-items';

function FavoritesList():JSX.Element {
  return (
    <ul className="favorites__list">
      <LocationsItems />
      <LocationsItems />
      <LocationsItems />
    </ul>
  );
}

export default FavoritesList;
