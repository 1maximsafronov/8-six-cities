
import {useState} from 'react';
import PlacesList from '../../blocks/places-list/places-list';
import PageHeader from '../../blocks/page-header/page-header';
import {Offers, Offer} from '../../../types/offer';
import Tabs from '../../blocks/tabs/tabs';
import Map from '../../blocks/map/map';
import {CITY} from '../../../mocks/offers';

type MainPageProps = {
  offers: Offers;
}


function MainPage(props: MainPageProps):JSX.Element {
  const {offers}=props;
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onCardHover = (id: number | string) =>{
    const currentOffer = offers.find((offer) => offer.id === id);

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
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlacesList offers={offers} onCardHover={onCardHover}/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map"
                selectedOffer={selectedOffer}
                offers={offers}
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
