import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { TempProcess } from './temp-process/temp-process';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.TEMP]: TempProcess.reducer,
});
