import { Hotels } from 'types/hotel';
import NearPlacesList from './near-places-list/near-places-list';

function NearPlaces({hotels}: NearPlacesProps):JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <NearPlacesList hotels={hotels}/>
    </section>
  );
}

type NearPlacesProps = {
  hotels:Hotels;
}

export default NearPlaces;
