import {   configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from 'services/api';
import { redirect } from './middleware/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
