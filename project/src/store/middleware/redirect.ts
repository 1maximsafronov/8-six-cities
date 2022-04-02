import browserHistory from 'browse-history';
import { Middleware } from '@reduxjs/toolkit';
import { rootReducer } from 'store/root-reducer';

export type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'app/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
