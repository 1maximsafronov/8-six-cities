import {useState} from 'react';

import {Offer} from 'types/offer';
import {CITY} from 'mocks/offers';
import {useAppSelector} from 'hooks/index';

import PageHeader from '../../blocks/page-header/page-header';
import PlacesList from '../../blocks/places-list/places-list';
import PlacesSorting from '../../blocks/places-sorting/places-sorting';
import Tabs from '../../blocks/tabs/tabs';
import Map from '../../blocks/map/map';

import { getOffersByLocation, sortOffers } from 'utils/common';
import { SortType } from 'const';

function MainPage():JSX.Element {
  const [sortType, setSortType] = useState(SortType.Popular);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const {currentLocation, offers} = useAppSelector((state) => state);

  const filteredOffers = getOffersByLocation(offers, currentLocation);
  const sortedOffres = sortOffers(filteredOffers, sortType);

  const onCardHover = (id: number | string) =>{
    const currentOffer = filteredOffers.find((offer) => offer.id === id);
    setSelectedOffer(currentOffer);
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
              <b className="places__found">{filteredOffers.length} places to stay in {currentLocation}</b>
              <PlacesSorting
                onChange={(newSortType) => {
                  setSortType(newSortType);
                }}
                activeType={sortType}
              />
              <PlacesList offers={sortedOffres} onCardHover={onCardHover}/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map"
                selectedOffer={selectedOffer}
                offers={filteredOffers}
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
