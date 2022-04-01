import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from 'const';
import { Hotels, Hotel } from 'types/hotel';
import { AuthData } from 'types/user';
export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city,
}));

export const loadHotels = createAction<Hotels>('data/loadHotels');
export const loadCurrentHotel = createAction<Hotel>('data/loadCurrentHotel');
export const satUserData = createAction<AuthData | null>('uder/setUserData');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
