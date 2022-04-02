import PageHeader from '../../blocks/page-header/page-header';
import PageFooter from 'components/blocks/page-footer/page-footer';
import Favorites from 'components/blocks/favorites/favorites';

function FavoritesPage():JSX.Element {
  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites />
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

export default FavoritesPage;
