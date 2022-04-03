
import { Hotels, Hotel, HotelsByCity } from 'types/hotel';
import { SortType } from '../const';

export const getHotelsByLocation = (hotels: Hotels, location: string):Hotels => hotels.filter((hotel) => hotel.city.name === location);

export const  sortHotels = (hotels: Hotels, sortType: SortType):Hotels => {
  switch(sortType) {
    case SortType.Popular:
      return hotels;
    case SortType.TopRated:
      return hotels.slice().sort((a,b) => b.rating - a.rating);
    case SortType.PriceHightToLow:
      return hotels.slice().sort((a, b) => b.price - a.price);
    case SortType.PriceLowToHigth:
      return hotels.slice().sort((a, b) => a.price - b.price);
    default:
      return hotels;
  }
};

export const isSelectedHotel = (selected: Hotel | undefined, hotel: Hotel): boolean => selected !== undefined && hotel.id === selected.id;

export const restructureHotels = (hotels:Hotels): HotelsByCity => {
  const hotelsByCity:HotelsByCity = hotels.reduce((acc:HotelsByCity, hotel: Hotel) => {
    const hotelCity = hotel.city.name;

    if (hotelCity in acc) {
      acc[hotelCity].push(hotel);
    } else {
      acc[hotelCity] = [hotel];
    }

    return acc;

  }, {});

  return hotelsByCity;
};

export const formatCommentDate = (date: Date) => {
  const string = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  // December 20, 2020
  return string;
};

export const formateDateTime = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');

  // 2020-12-20
  return `${y}-${m}-${d}`;
};
