import {useState} from 'react';
import type { Hotel} from 'types/hotel';
import {useAppSelector} from 'hooks/index';

import PageHeader from '../../blocks/page-header/page-header';
import Tabs from '../../blocks/tabs/tabs';
import Map from '../../blocks/map/map';
import Places from '../../blocks/places/places';

import {getCurrentLocation, getHotelsByLocation, getLoadDataStatus} from 'store/selectors';

function MainPage():JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const currentLocation = useAppSelector(getCurrentLocation);
  const isDataLoaded = useAppSelector(getLoadDataStatus);
  const hotels = useAppSelector(getHotelsByLocation);

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  const currentCity = hotels[0].city;

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
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
