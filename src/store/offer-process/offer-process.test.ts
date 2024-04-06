import { makeFakeCurrentOffer, makeFakeNearOffers } from '../../utils/mocks';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchSetFavoriteOffer } from '../api-actions';
import { clearOffer, offerProcess } from './offer-process';


describe('OfferProcess Slice', () => {
  const mockCurrentOffer = makeFakeCurrentOffer();
  const mockNearOffers = makeFakeNearOffers;
  const mockFavoriteCurrentOffer = makeFakeCurrentOffer(mockCurrentOffer.id, true);
  const mockNotFavoriteCurrentOffer = makeFakeCurrentOffer(mockCurrentOffer.id, false);

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [true, true],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [true, true],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to "null", set "nearOffers" to "[]" with "clearOffer"', () => {
    const initialState = {
      offer: mockCurrentOffer,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(initialState, clearOffer());

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading[0]" to "true", "hasErrorOfferLoading" to "false" with "fetchCurrentOfferAction.pending"', () => {
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [true, true],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(undefined, fetchCurrentOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to array with Offer, "isOfferDataLoading[0]" to "false", "hasErrorOffersLoading" to "false" with "fetchCurrentOfferAction.fulfilled"', () => {

    const expectedState = {
      offer: mockCurrentOffer,
      nearOffers: [],
      isOfferDataLoading: [false, true],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(
      undefined,
      fetchCurrentOfferAction.fulfilled(
        mockCurrentOffer, '', mockCurrentOffer.id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading[0]" to "false", "hasErrorOfferLoading" to "true" with "fetchCurrentOfferAction.rejected"', () => {
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [false, true],
      hasErrorOfferLoading: true,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(undefined, fetchCurrentOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading[1]" to "true", "hasErrorNearOffersLoading" to "false" with "fetchNearOffersAction.pending"', () => {
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [true, true],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(undefined, fetchNearOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffers" to array with Offer, "isOfferDataLoading[1]" to "false", "hasErrorNearOffersLoading" to "false" with "fetchNearOffersAction.fulfilled"', () => {

    const expectedState = {
      offer: null,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [true, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(
      undefined,
      fetchNearOffersAction.fulfilled(
        mockNearOffers, '', mockCurrentOffer.id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading[1]" to "false", "hasErrorNearOffersLoading" to "true" with "fetchNearOffersAction.rejected"', () => {
    const expectedState = {
      offer: null,
      nearOffers: [],
      isOfferDataLoading: [true, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: true,
    };

    const result = offerProcess.reducer(undefined, fetchNearOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavorite" to array with Offer, find and change offer from id and set "isFavorite" to "true", with "fetchSetFavoriteOffer.fulfilled"', () => {
    const initialState = {
      offer: mockNotFavoriteCurrentOffer,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const expectedState = {
      offer: mockFavoriteCurrentOffer,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockFavoriteCurrentOffer, '', {offerId: initialState.offer.id, status: 1})
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavorite" to array with Offer, find and change offer from id and set "isFavorite" to "false", with "fetchSetFavoriteOffer.fulfilled"', () => {

    const initialState = {
      offer: mockFavoriteCurrentOffer,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const expectedState = {
      offer: mockNotFavoriteCurrentOffer,
      nearOffers: mockNearOffers,
      isOfferDataLoading: [false, false],
      hasErrorOfferLoading: false,
      hasErrorNearOffersLoading: false,
    };

    const result = offerProcess.reducer(
      initialState,
      fetchSetFavoriteOffer.fulfilled(
        mockNotFavoriteCurrentOffer, '', {offerId: initialState.offer.id, status: 0})
    );

    expect(result).toEqual(expectedState);
  });
});
