import {useState} from 'react';
import type { Hotel} from 'types/hotel';
import {useAppSelector} from 'hooks/index';

import PageHeader from '../../blocks/page-header/page-header';
import Tabs from '../../blocks/tabs/tabs';
import Map from '../../blocks/map/map';
import Places from '../../blocks/places/places';

import { getHotelsByLocation } from 'utils/common';

function MainPage():JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const {currentLocation, hotels, isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  const filteredHotels = getHotelsByLocation(hotels, currentLocation);

  const currentCity = filteredHotels[0].city;

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <Places
              hotels={filteredHotels}
              location={currentLocation}
              onCardHover={
                (hotel: Hotel | undefined) =>
                  setSelectedHotel(hotel)
              }
            />
            <div className="cities__right-section">
              <Map className="cities__map"
                selectedHotel={selectedHotel}
                hotels={filteredHotels}
                city={currentCity}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
