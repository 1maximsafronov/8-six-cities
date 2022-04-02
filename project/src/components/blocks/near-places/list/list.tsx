import { Hotels } from 'types/hotel';
import NearPlacesItem from '../item/item';

function NearPlacesList({hotels}:NearPlacesProps):JSX.Element {
  return (
    <div className="near-places__list places__list">
      {hotels.map((hotel) => {
        const keyValue = `hotel-${hotel.id}`;

        return <NearPlacesItem hotel={hotel} key={keyValue}/>;
      })}

    </div>
  );
}

type NearPlacesProps = {
  hotels: Hotels;
};

export default NearPlacesList;
