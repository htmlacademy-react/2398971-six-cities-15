import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { redirectToRoute} from './action.js';
import { APIRoute, AppRoute} from '../const.js';
import { Comments, CurrentOffer, OffersList } from '../types/offer.js';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { dropToken, saveToken } from '../services/token.js';
import { NewCommentData } from '../types/new-comment-data.js';
import { CommentData } from '../types/comment-data.js';
import { SetFavoritData } from '../types/set-favorite-data.js';

export const fetchAllOfferAction = createAsyncThunk<OffersList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersList>(APIRoute.Offers);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<CurrentOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchCurrentOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CurrentOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<OffersList, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchNearOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OffersList>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<OffersList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OffersList>(APIRoute.Favorite);
    return data;
  },
);

export const fetchSetFavoriteOffer = createAsyncThunk<CurrentOffer, SetFavoritData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchSetFavoriteOffer',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<CurrentOffer>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return data;
  },
);

export const fetchOfferCommentAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOfferComment',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const fetchNewCommentAction = createAsyncThunk<CommentData, NewCommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchNewComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<CommentData>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
