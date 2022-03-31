import { Offers } from '../types/offer';

export const getOffersByLocation = (offers: Offers, location: string):Offers => offers.filter((offer) => offer.city.title === location);
