import { useState } from 'react';
import type { Hotel, Hotels } from 'types/hotel';
import Empty from './cities-empty/cities-empty';
import Loading from './cities-loading/cities-loading';
import Map from '../map/map';
import Places from '../places/places';

function CitiesSection(props: CitiesSectionProps):JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);

  const {hotels, currentLocation, isEmpty, isLoading} = props;

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <Empty currentLocation={currentLocation}/>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          hotels={hotels}
          location={currentLocation}
          onCardHover={
            (hotel: Hotel | undefined) =>
              setSelectedHotel(hotel)
          }
        />
        <div className="cities__right-section">
          <Map className="cities__map"
            selectedHotel={selectedHotel}
            hotels={hotels}
            city={hotels[0].city}
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
