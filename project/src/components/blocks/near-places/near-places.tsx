
import NearPlacesList from './list/list';

function NearPlaces(props: any):JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <NearPlacesList {...props}/>
    </section>
  );
}

export default NearPlaces;
