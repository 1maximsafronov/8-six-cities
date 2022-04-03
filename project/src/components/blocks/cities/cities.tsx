import { useState } from 'react';
import type { Hotel, Hotels } from 'types/hotel';
import Empty from './cities-empty/cities-empty';
import Loading from './cities-loading/cities-loading';
import Map from '../map/map';
import Places from '../places/places';

function CitiesSection(props: CitiesSectionProps):JSX.Element {
  const {hotels, currentLocation, isEmpty, isLoading} = props;

  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <Empty currentLocation={currentLocation}/>;
  }

  const onCardHover = (hotel: Hotel | undefined) =>
    setSelectedHotel(hotel);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          hotels={hotels}
          location={currentLocation}
          onCardHover={onCardHover}
        />
        <div className="cities__right-section">
          <Map className="cities__map"
            selectedHotel={selectedHotel}
            hotels={hotels}
          />
        </div>
      </div>
    </div>
  );
}

type CitiesSectionProps = {
  hotels: Hotels;
  currentLocation: string;
  isEmpty: boolean;
  isLoading: boolean;
};

export default CitiesSection;
