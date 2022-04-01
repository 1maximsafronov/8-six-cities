import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city,
}));

export const loadHotels = createAction('data/loadHotels', (hotels) => ({
  payload: hotels,
}));
