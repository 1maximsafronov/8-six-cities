import type { State } from 'types/state';
import { AuthorizationStatus, NameSpace } from 'const';
// import { createSelector } from 'reselect';

export const getHotels = (state:State) => state[NameSpace.AppData].hotels;
export const getCurrentLocation = (state:State) => state[NameSpace.AppData].currentLocation;
export const getLoadDataStatus = (state: State) => state[NameSpace.AppData].isDataLoaded;
export const getHotelsByLocation = (state: State) => {
  const hotels = getHotels(state);
  const location = getCurrentLocation(state);
  return hotels.filter((hotel) => hotel.city.name === location);
};

export const getNearbyHotels = (state: State) => state[NameSpace.AppProcess].nearbyHotels;
export const getCurrenHotel = (state: State) => state[NameSpace.AppProcess].currentHotel;
export const getReviews = (state: State) => state[NameSpace.AppProcess].currentHotelrReviews;

export const getAuthStatus = (state: State) => state[NameSpace.UserData].authorizationStatus;
export const getUserData = (state: State) => state[NameSpace.UserData].userData;
export const isUserAuthorized =(state: State) => {
  const status = getAuthStatus(state);
  return status === AuthorizationStatus.Auth;
};
