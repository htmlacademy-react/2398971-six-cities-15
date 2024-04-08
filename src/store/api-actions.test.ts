import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeCurrentOffer, makeFakeNearOffers, makeFakeOffers, makeFakeFavoriteOffers, makeFakeComments, makeFakeFavoriteOffer, makeFakeComment } from '../utils/mocks';
import { State } from '../types/state';
import { checkAuthAction, fetchAllOfferAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearOffersAction, fetchNewCommentAction, fetchOfferCommentAction, fetchSetFavoriteOffer, loginAction, logoutAction } from './api-actions';
import { APIRoute, NameSpace } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.Offers]: {offers: []},
      [NameSpace.Offer]: {offer: null, nearOffers: []},
      [NameSpace.Favorites]: {favoriteOffers: []},
      [NameSpace.Comments]: {comments: []},
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchAllOfferAction', () => {
    it('should dispatch "fetchAllOfferAction.pending", "fetchAllOfferAction.fulfilled", when server response 200', async() => {
      const mockOffers = makeFakeOffers;
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchAllOfferAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchAllOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAllOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchAllOfferAction.pending.type,
        fetchAllOfferAction.fulfilled.type,
      ]);

      expect(fetchAllOfferActionFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchAllOfferAction.pending", "fetchAllOfferAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchAllOfferAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchAllOfferAction.pending.type,
        fetchAllOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchCurrentOfferAction', () => {
    it('should dispatch "fetchCurrentOfferAction.pending", "fetchCurrentOfferAction.fulfilled", when server response 200', async() => {
      const mockCurrentOffer = makeFakeCurrentOffer;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${'offer'}`).reply(200, mockCurrentOffer);

      await store.dispatch(fetchCurrentOfferAction('offer'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCurrentOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCurrentOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCurrentOfferAction.pending.type,
        fetchCurrentOfferAction.fulfilled.type,
      ]);

      expect(fetchCurrentOfferActionFulfilled.payload)
        .toEqual(mockCurrentOffer);
    });

    it('should dispatch "fetchCurrentOfferAction.pending", "fetchCurrentOfferAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${'offer'}`).reply(404, []);

      await store.dispatch(fetchCurrentOfferAction('offer'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCurrentOfferAction.pending.type,
        fetchCurrentOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearOffersAction', () => {
    it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.fulfilled", when server response 200', async() => {
      const mockNearOffers = makeFakeNearOffers;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${'offer'}/nearby`).reply(200, mockNearOffers);

      await store.dispatch(fetchNearOffersAction('offer'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type,
      ]);

      expect(fetchNearOffersActionFulfilled.payload)
        .toEqual(mockNearOffers);
    });

    it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${'offer'}/nearby`).reply(404, []);

      await store.dispatch(fetchNearOffersAction('offer'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersAction', () => {
    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.fulfilled", when server response 200', async() => {
      const mockFavoriteOffers = makeFakeFavoriteOffers;
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);

      await store.dispatch(fetchFavoriteOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.fulfilled.type,
      ]);

      expect(fetchNearOffersActionFulfilled.payload)
        .toEqual(mockFavoriteOffers);
    });

    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(401, []);

      await store.dispatch(fetchFavoriteOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferCommentAction', () => {
    it('should dispatch "fetchOfferCommentAction.pending", "fetchOfferCommentAction.fulfilled", when server response 200', async() => {
      const mockComments = makeFakeComments;
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${'offer'}`).reply(200, mockComments);

      await store.dispatch(fetchOfferCommentAction('offer'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferCommentActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferCommentAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferCommentAction.pending.type,
        fetchOfferCommentAction.fulfilled.type,
      ]);

      expect(fetchOfferCommentActionFulfilled.payload)
        .toEqual(mockComments);
    });

    it('should dispatch "fetchOfferCommentAction.pending", "fetchOfferCommentAction.rejected" when server response 404', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${'offer'}`).reply(404, []);

      await store.dispatch(fetchOfferCommentAction('offer'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferCommentAction.pending.type,
        fetchOfferCommentAction.rejected.type,
      ]);
    });
  });

  describe('fetchSetFavoriteOffer', () => {
    it('should dispatch "fetchSetFavoriteOffer.pending", "fetchSetFavoriteOffer.fulfilled", when server response 200', async() => {
      const mockFavoriteOffer = makeFakeFavoriteOffer(undefined, true);
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${'offer'}/${'1'}`).reply(200, mockFavoriteOffer);

      await store.dispatch(fetchSetFavoriteOffer({offerId: 'offer', status: 1}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSetFavoriteOfferFulfilled = emittedActions.at(1) as ReturnType<typeof fetchSetFavoriteOffer.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSetFavoriteOffer.pending.type,
        fetchSetFavoriteOffer.fulfilled.type,
      ]);

      expect(fetchSetFavoriteOfferFulfilled.payload)
        .toEqual(mockFavoriteOffer);
    });

    it('should dispatch "fetchSetFavoriteOffer.pending", "fetchSetFavoriteOffer.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${'offer'}/${'1'}`).reply(400, []);

      await store.dispatch(fetchSetFavoriteOffer({offerId: 'offer', status: 1}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSetFavoriteOffer.pending.type,
        fetchSetFavoriteOffer.rejected.type,
      ]);
    });
  });

  describe('fetchNewCommentAction', () => {
    it('should dispatch "fetchNewCommentAction.pending", "fetchNewCommentAction.fulfilled", when server response 200', async() => {
      const mockComment = makeFakeComment;
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${'offer'}`).reply(200, mockComment);

      await store.dispatch(fetchNewCommentAction({offerId: 'offer',comment: 'text', rating: 1}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNewCommentActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNewCommentAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNewCommentAction.pending.type,
        fetchNewCommentAction.fulfilled.type,
      ]);

      expect(fetchNewCommentActionFulfilled.payload)
        .toEqual(mockComment);
    });

    it('should dispatch "fetchNewCommentAction.pending", "fetchNewCommentAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${'offer'}`).reply(400, []);

      await store.dispatch(fetchNewCommentAction({offerId: 'offer',comment: 'text', rating: 1}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNewCommentAction.pending.type,
        fetchNewCommentAction.rejected.type,
      ]);
    });
  });
});

