import {   configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from 'services/api';

const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
