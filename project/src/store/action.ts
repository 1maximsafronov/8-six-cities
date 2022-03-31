import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city,
}));
