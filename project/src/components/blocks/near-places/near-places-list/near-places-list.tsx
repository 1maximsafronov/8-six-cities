import { Hotels } from 'types/hotel';
import PlaceCard from 'components/blocks/place-card/place-card';

function NearPlacesList({hotels}:NearPlacesProps):JSX.Element {
  return (
    <div className="near-places__list places__list">
      {hotels.map((hotel) => {
        const keyValue = `hotel-${hotel.id}`;

        return (
          <PlaceCard className='near-places__card'
            hotel={hotel}
            key={keyValue}
          />
        );
      })}

    </div>
  );
}

type NearPlacesProps = {
  hotels: Hotels;
};

export default NearPlacesList;
