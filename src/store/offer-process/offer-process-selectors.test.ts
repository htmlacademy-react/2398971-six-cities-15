import { NameSpace } from '../../const';
import { OfferProcess } from '../../types/state';
import { makeFakeCurrentOffer, makeFakeNearOffers } from '../../utils/mocks';
import { getCurrentOffer, getErrorNearOffersLoadingStatus, getErrorOfferLoadingStatus, getNearOffers, getOfferDataLoadingStatus } from './selectors';

describe('OffersProcess selectors', () => {
  const mockFakeCurrentOffer = makeFakeCurrentOffer();

  const state: OfferProcess = {
    offer: mockFakeCurrentOffer,
    nearOffers: makeFakeNearOffers,
    isOfferDataLoading: [false, false],
    hasErrorOfferLoading: false,
    hasErrorNearOffersLoading: false,
  };

  it('should return current offer from state', () => {
    const result = getCurrentOffer({ [NameSpace.Offer]: state });

    expect(result).toBe(mockFakeCurrentOffer);
  });

  it('should return near offers from state', () => {
    const result = getNearOffers({ [NameSpace.Offer]: state });

    expect(result).toBe(makeFakeNearOffers);
  });

  it('should return isOfferDataLoading status from state', () => {
    const result = getOfferDataLoadingStatus({ [NameSpace.Offer]: state });

    expect(result).toEqual([false, false]);
  });

  it('should return hasErrorOfferLoading status from state', () => {
    const result = getErrorOfferLoadingStatus({ [NameSpace.Offer]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorNearOffersLoading status from state', () => {
    const result = getErrorNearOffersLoadingStatus({ [NameSpace.Offer]: state });

    expect(result).toBe(false);
  });
});
