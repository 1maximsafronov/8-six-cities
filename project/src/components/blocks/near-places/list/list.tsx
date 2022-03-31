import { Offers } from '../../../../types/offer';
import NearPlacesItem from '../item/item';

type NearPlacesProps = {
  offers: Offers;
}

function NearPlacesList({offers}:NearPlacesProps):JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((_item, index) => {
        const keyValue = `offer-${index}`;

        return <NearPlacesItem key={keyValue}/>;
      })}

    </div>
  );
}

export default NearPlacesList;
