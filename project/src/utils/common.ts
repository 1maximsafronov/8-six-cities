
import { Hotels } from 'types/hotel';
import { SortType } from '../const';

export const getHotelsByLocation = (hotels: Hotels, location: string):Hotels => hotels.slice().filter((hotel) => hotel.city.name === location);

export const  sortHotels = (hotels: Hotels, sortType: SortType):Hotels => {
  hotels = hotels.slice();
  switch(sortType) {
    case SortType.Popular:
      return hotels;
    case SortType.TopRated:
      return hotels;
    case SortType.PriceHightToLow:
      return hotels.sort((a, b) => b.price - a.price);
    case SortType.PriceLowToHigth:
      return hotels.sort((a, b) => a.price - b.price);
    default:
      return hotels;
  }
};
