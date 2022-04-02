import type { State } from 'types/state';
import { AuthorizationStatus, NameSpace } from 'const';
import { createSelector } from 'reselect';

export const getHotels = (state:State) => state[NameSpace.AppData].hotels;
export const getCurrentLocation = (state:State) => state[NameSpace.AppData].currentLocation;
export const getLoadDataStatus = (state: State) => state[NameSpace.AppData].isDataLoaded;
export const getHotelsByLocation = createSelector(
  getHotels,
  getCurrentLocation,
  (hotels, location) => hotels.filter((hotel) => hotel.city.name === location),
);

export const getNearbyHotels = (state: State) => state[NameSpace.AppProcess].nearbyHotels;
export const getCurrenHotel = (state: State) => state[NameSpace.AppProcess].currentHotel;
export const getReviews = (state: State) => state[NameSpace.AppProcess].currentHotelrReviews;

export const getAuthStatus = (state: State) => state[NameSpace.UserData].authorizationStatus;
export const getUserData = (state: State) => state[NameSpace.UserData].userData;
export const isUserAuthorized = createSelector(
  getAuthStatus,
  (status) => status === AuthorizationStatus.Auth,
);

export const getFavorites = (state: State) => state[NameSpace.UserData].favoritesHotels;
export const getFavoritesStatus = (state: State) => state[NameSpace.UserData].isFavoritesLoaded;
