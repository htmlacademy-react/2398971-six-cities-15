import { makeFakeCurrentOffer, makeFakeFavoriteOffer, makeFakeFavoriteOffers } from '../../utils/mocks';
import { fetchFavoriteOffersAction, fetchSetFavoriteOffer } from '../api-actions';
import { clearFavoriteOffers, favoriteProcess } from './favorite-process';


describe('FavoriteProcess Slice', () => {
  const mockFavoriteOffer = makeFakeFavoriteOffer(undefined, true);
  const mockFavoriteCurrentOffer = makeFakeCurrentOffer(mockFavoriteOffer.id, true);
  const mockNotFavoriteCurrentOffer = makeFakeCurrentOffer(mockFavoriteOffer.id, false);
  const mockThreeFavoriteFakeOffers = makeFakeFavoriteOffers;
  const mockFourFavoriteFakeOffers = [...mockThreeFavoriteFakeOffers, mockFavoriteOffer];

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoriteOffers: [],
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: true,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      favoriteOffers: [],
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: true,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to "null", set "nearOffers" to "[]" with "clearOffer"', () => {
    const initialState = {
      favoriteOffers: mockThreeFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: true,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const expectedState = {
      favoriteOffers: [],
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: true,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(initialState, clearFavoriteOffers());

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersDataLoading" to "true", "hasErrorFavoriteOffersLoading" to "false" with "fetchFavoriteOffersAction.pending"', () => {
    const expectedState = {
      favoriteOffers: [],
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: true,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(undefined, fetchFavoriteOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoriteOffers" to array with Offer, "isFavoriteOffersDataLoading" to "false", "hasErrorFavoriteOffersLoading" to "false" with "fetchFavoriteOffersAction.fulfilled"', () => {

    const expectedState = {
      favoriteOffers: mockThreeFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(
      undefined,
      fetchFavoriteOffersAction.fulfilled(
        mockThreeFavoriteFakeOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersDataLoading" to "false", "hasErrorFavoriteOffersLoading" to "true" with "fetchFavoriteOffersAction.rejected"', () => {
    const expectedState = {
      favoriteOffers: [],
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: true,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(undefined, fetchFavoriteOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should delete "isFavorite" to array with Offer, find and delete offer from id, with "fetchSetFavoriteOffer.fulfilled"', () => {

    const initialState = {
      favoriteOffers: mockFourFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const expectedState = {
      favoriteOffers: mockThreeFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockNotFavoriteCurrentOffer, '', {offerId: mockFourFavoriteFakeOffers[3].id, status: 0})
    );

    expect(result).toEqual(expectedState);
  });

  it('should add "isFavorite" to array with Offer, find and delete offer from id, with "fetchSetFavoriteOffer.fulfilled"', () => {

    const initialState = {
      favoriteOffers: mockThreeFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const expectedState = {
      favoriteOffers: mockFourFavoriteFakeOffers,
      isSetFavoriteOffersDataSending: false,
      isFavoriteOffersDataLoading: false,
      hasErrorFavoriteOffersLoading: false,
      hasErrorFavoriteOfferSending: false,
    };

    const result = favoriteProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockFavoriteCurrentOffer, '', {offerId: mockFavoriteCurrentOffer.id, status: 0})
    );

    expect(result).toEqual(expectedState);
  });

});
