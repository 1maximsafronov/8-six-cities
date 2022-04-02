import { useState } from 'react';
import type { Hotel, Hotels } from 'types/hotel';

import Map from '../map/map';
import Places from '../places/places';

function CitiesSection(props: CitiesSectionProps):JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);

  const {hotels, currentLocation, isEmpty} = props;

  if (isEmpty) {
    return (
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentLocation}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    );
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
};

export default CitiesSection;
