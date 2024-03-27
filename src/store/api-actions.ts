import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { addComment, getUserName, loadComments, loadFavoriteOffers, loadNearOffer, loadOffer, loadOffers, redirectToRoute, requireAuthorization, setCurrentOffers, setOffersDataLoadingStatus, switchFavoriteOffer} from './action.js';
import { APIRoute, AppRoute, AuthorizationStatus} from '../const.js';
import { Comments, CurrentOffer, OffersList } from '../types/offer.js';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { dropToken, saveToken } from '../services/token.js';
import { NewCommentData } from '../types/new-comment-data.js';
import { CommentData } from '../types/comment-data.js';
import { SetFavoritData } from '../types/set-favorite-data.js';

export const fetchAllOfferAction = createAsyncThunk<void, undefined, {
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

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchCurrentOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<CurrentOffer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOffer(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersList>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearOffer(data));
  },
);

export const fetchOfferCommentAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOfferComment',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadComments(data));
  },
);

export const fetchNewCommentAction = createAsyncThunk<void, NewCommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchNewComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<CommentData>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    dispatch(addComment(data));
    dispatch(fetchOfferCommentAction(offerId as string));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserName(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getUserName(data.email));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
