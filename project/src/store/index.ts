import {   configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createAPI } from 'services/api';
import { redirect } from './middleware/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
