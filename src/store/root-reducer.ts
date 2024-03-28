import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { TempProcess } from './temp-process/temp-process';
import { offerProcess } from './offers-process/offer-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offerProcess.reducer,
  [NameSpace.TEMP]: TempProcess.reducer,
});
