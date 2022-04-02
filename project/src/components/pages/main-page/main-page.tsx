import classNames from 'classnames';
import {useAppSelector} from 'hooks/index';
import {getCurrentLocation, getHotelsByLocation, getLoadDataStatus} from 'store/selectors';

import Tabs from '../../blocks/tabs/tabs';
import PageHeader from '../../blocks/page-header/page-header';
import CitiesSection from 'components/blocks/cities/cities';

function MainPage():JSX.Element {
  const currentLocation = useAppSelector(getCurrentLocation);
  const isDataLoaded = useAppSelector(getLoadDataStatus);
  const hotels = useAppSelector(getHotelsByLocation);

  const isEmptyPage = false;

  if (!isDataLoaded) {
    return <p>Loading...</p>;
  }

  const pageMainClassName = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': isEmptyPage},
  );

  return (
    <div className="page page--gray page--main">
      <PageHeader />

      <main className={pageMainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />

        <CitiesSection
          hotels={hotels}
          isEmpty={isEmptyPage}
          currentLocation={currentLocation}
        />
      </main>
    </div>
  );
}

export default MainPage;
