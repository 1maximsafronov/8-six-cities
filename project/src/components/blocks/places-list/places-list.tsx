import PlaceCard from '../place-card/place-card';
import {Offers} from '../../../types/offer';

type PlacesListProps = {
  offers: Offers;
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => (
        <PlaceCard
          key={`${offer.name}`}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default PlacesList;
