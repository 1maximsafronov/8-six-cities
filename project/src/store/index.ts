import {   configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from 'services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
