import { CITIES, SORTING } from '../../const';
import { makeFakeCurrentOffer, makeFakeFavoriteOffer, makeFakeOffers } from '../../utils/mocks';
import { fetchAllOfferAction, fetchSetFavoriteOffer } from '../api-actions';
import { cityChange, offersProcess, sortingChange } from './offers-process';

describe('OffersProcess Slice', () => {

  const mockCurrentOffer = makeFakeCurrentOffer();
  const mockFavoriteCurrentOffer = makeFakeCurrentOffer(mockCurrentOffer.id, true);
  const mockNotFavoriteCurrentOffer = makeFakeCurrentOffer(mockCurrentOffer.id, false);
  const mockFavoriteOffer = makeFakeFavoriteOffer(mockCurrentOffer.id, true);
  const mockNotFavoriteOffer = makeFakeFavoriteOffer(mockCurrentOffer.id, false);
  const mockOffers = makeFakeOffers;

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "city" to "CITIES[1]" with "cityChange"', () => {
    const initialState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const expectedState = {
      city: CITIES[1],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(initialState, cityChange(CITIES[1]));

    expect(result).toEqual(expectedState);
  });

  it('should set "sorting" to "SORTING[0]" with "sortingChange"', () => {
    const initialState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[1],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(initialState, sortingChange(SORTING[1]));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true", "hasErrorOffersLoading" to "false" with "fetchAllOfferAction.pending"', () => {
    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: true,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(undefined, fetchAllOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with Offer, "isOffersDataLoading" to "false", "hasErrorOffersLoading" to "false" with "fetchAllOfferAction.fulfilled"', () => {

    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: mockOffers,
      isOffersDataLoading: false,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(
      undefined,
      fetchAllOfferAction.fulfilled(
        mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false", "hasErrorOffersLoading" to "true" with "fetchAllOfferAction.rejected', () => {
    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [],
      isOffersDataLoading: false,
      hasErrorOffersLoading: true,
    };

    const result = offersProcess.reducer(undefined, fetchAllOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavorite" to array with Offer, find and change offer from id and set "isFavorite" to "false", with "fetchSetFavoriteOffer.fulfilled"', () => {
    const initialState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [mockFavoriteOffer],
      isOffersDataLoading: false,
      hasErrorOffersLoading: false,
    };

    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [mockNotFavoriteOffer],
      isOffersDataLoading: false,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockFavoriteCurrentOffer, '', {offerId: mockFavoriteCurrentOffer.id, status: 0})
    );

    expect(result.offers[0].isPremium).toBe(expectedState.offers[0].isPremium);
  });

  it('should set "isFavorite" to array with Offer, find and change offer from id and set "isFavorite" to "true", with "fetchSetFavoriteOffer.fulfilled"', () => {

    const initialState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [mockNotFavoriteOffer],
      isOffersDataLoading: false,
      hasErrorOffersLoading: false,
    };

    const expectedState = {
      city: CITIES[0],
      sorting: SORTING[0],
      offers: [mockFavoriteOffer],
      isOffersDataLoading: false,
      hasErrorOffersLoading: false,
    };

    const result = offersProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockNotFavoriteCurrentOffer, '', {offerId: mockNotFavoriteCurrentOffer.id, status: 1})
    );

    expect(result.offers[0].isPremium).toBe(expectedState.offers[0].isPremium);
  });

});
