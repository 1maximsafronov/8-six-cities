import browserHistory from 'browse-history';
import { Middleware } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer';

export type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'app/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
