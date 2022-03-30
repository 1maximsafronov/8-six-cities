import NearPlacesItem from '../item/item';

function NearPlacesList():JSX.Element {
  return (
    <div className="near-places__list places__list">
      <NearPlacesItem />
    </div>
  );
}

export default NearPlacesList;
