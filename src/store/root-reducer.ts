import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';
import { favoriteProcess } from './favorite-process/favorite-process';
import { commentsProcess } from './comments-process/comments-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Favorites]: favoriteProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
});
