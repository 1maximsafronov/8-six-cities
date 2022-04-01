import {useState} from 'react';

import { Hotel } from 'types/hotel';
import {CITY} from 'mocks/offers';
import {useAppSelector} from 'hooks/index';

import PageHeader from '../../blocks/page-header/page-header';
import PlacesList from '../../blocks/places-list/places-list';
import PlacesSorting from '../../blocks/places-sorting/places-sorting';
import Tabs from '../../blocks/tabs/tabs';
import Map from '../../blocks/map/map';

import { getHotelsByLocation, sortHotels } from 'utils/common';
import { SortType } from 'const';

function MainPage():JSX.Element {
  const [sortType, setSortType] = useState(SortType.Popular);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const {currentLocation, offers: hotels} = useAppSelector((state) => state);

  const filteredHotels = getHotelsByLocation(hotels, currentLocation);
  const sortedHotels = sortHotels(filteredHotels, sortType);

  const onCardHover = (id: number | string) =>{
    const currentOffer = hotels.find((hotel) => false);
    setSelectedHotel(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotels.length} places to stay in {currentLocation}</b>
              <PlacesSorting
                onChange={(newSortType) => {
                  setSortType(newSortType);
                }}
                activeType={sortType}
              />
              <PlacesList offers={hotels} onCardHover={onCardHover}/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map"
                selectedHotel={selectedHotel}
                hotels={sortedHotels}
                city={CITY}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
