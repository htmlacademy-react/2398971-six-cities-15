import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadOffers, setCurrentOffers, setError, setOffersDataLoadingStatus} from './action.js';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const.js';
import { OffersList } from '../types/offer.js';
import { store } from './index.js';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OffersList>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
    dispatch(setCurrentOffers(data));
  },
);
