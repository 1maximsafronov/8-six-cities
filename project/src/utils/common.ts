import { Offers } from '../types/offer';
import { SortType } from '../const';

export const getOffersByLocation = (offers: Offers, location: string):Offers => offers.filter((offer) => offer.city.title === location);

export const  sortOffers = (offers: Offers, sortType: SortType):Offers => {
  switch(sortType) {
    case SortType.Popular:
      return offers;
    case SortType.TopRated:
      return offers;
    case SortType.PriceHightToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.PriceLowToHigth:
      return offers.sort((a, b) => a.price - b.price);
    default:
      return offers;
  }
};
