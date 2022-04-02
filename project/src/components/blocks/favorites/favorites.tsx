import List from './favorites-list/favorites-list';
import Loading from './favorites-loading/favorites-loading';
import Empty from './favorites-empty/favorites-empty';
import { Hotels } from 'types/hotel';

function Favorites(props:FavoritesProps):JSX.Element {
  const {isLoading, isEmpty, hotels} = props;

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <Empty />;
  }


  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <List hotels={hotels}/>
    </section>
  );
}

type FavoritesProps = {
  isLoading: boolean;
  isEmpty: boolean;
  hotels: Hotels;
}

export default Favorites;
