import { useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';

import { sortHotels } from 'utils/common';
import { SortType } from 'const';

import { Hotels, Hotel } from 'types/hotel';

type PlacesProps = {
  hotels: Hotels;
  location: string;
  onCardHover: (hotel: Hotel | undefined) => void;
};

function Places({hotels, location, onCardHover}:PlacesProps) :JSX.Element {
  const [sortType, setSortType] = useState(SortType.Popular);
  const hotelsCount = hotels.length;
  const sortedHotels = sortHotels(hotels, sortType);

  const handleCardHover = (id: number | string) =>{
    const currentOffer = hotels.find((hotel) => hotel.id === id);
    onCardHover(currentOffer);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{hotelsCount} places to stay in {location}</b>
      <PlacesSorting
        onChange={(newSortType) => setSortType(newSortType)}
        activeType={sortType}
      />
      <PlacesList offers={sortedHotels} onCardHover={handleCardHover}/>
    </section>
  );
}

export default Places;
