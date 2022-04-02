import List from './favorites-list/favorites-list';

function Favorites():JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <List />
    </section>
  );
}


export default Favorites;
