import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'const';
import { appData } from './app-data/app-data';
import { appProcess } from './app-process/app-process';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData,
  [NameSpace.AppProcess]: appProcess,
  [NameSpace.UserData]: userData,
});
