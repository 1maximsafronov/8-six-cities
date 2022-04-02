import type { State } from 'types/state';

export const getHotels = (state:State) => state.hotels;
export const getCurrentLocation = (state:State) => state.currentLocation;
export const getLoadDataStatus = (state: State) => state.isDataLoaded;
export const getHotelsByLocation = (state: State) => {
  const hotels = getHotels(state);
  const location = getCurrentLocation(state);
  return hotels.filter((hotel) => hotel.city.name === location);
};
