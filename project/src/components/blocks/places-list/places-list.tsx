import PlaceCard from '../place-card/place-card';
import {Offers} from '../../../types/offer';


type PlacesListProps = {
  offers: Offers;
  onCardHover: (id: number | string) => void
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {offers, onCardHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          onHover={() => {
            onCardHover(offer.id);
          }}
          key={`${offer.name}`}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default PlacesList;
