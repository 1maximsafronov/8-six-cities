import PlaceCard from '../place-card/place-card';
import {Hotels} from 'types/hotel';


type PlacesListProps = {
  offers: Hotels;
  onCardHover: (id: number | string) => void
}

function PlacesList(props: PlacesListProps):JSX.Element {
  const {offers, onCardHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((hotel) => {
        const keyValue = `hotel-${hotel.id}`;
        return(
          <PlaceCard
            key={keyValue}
            onHover={() => {
              onCardHover(hotel.id);
            }}
            hotel={hotel}
          />
        );
      })}
    </div>
  );
}

export default PlacesList;
