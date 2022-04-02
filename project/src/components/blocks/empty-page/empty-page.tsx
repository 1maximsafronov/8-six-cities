import NoPlaces from '../no-places/no-places';
import Tabs from '../tabs/tabs';

function EmptyPage():JSX.Element {

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <NoPlaces />
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}

export default EmptyPage;
