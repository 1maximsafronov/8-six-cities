import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from 'const';
import { AuthData } from 'types/user';
import { requireAuthorization, satUserData } from '../action';

export type UserDataState = {
  userData: AuthData | null;
  authorizationStatus: AuthorizationStatus;
};

export const initialState:UserDataState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(satUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


export {userData};
