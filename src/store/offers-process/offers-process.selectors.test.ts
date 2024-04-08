import { CITIES, NameSpace, SORTING } from '../../const';
import { OffersProcess } from '../../types/state';
import { makeFakeOffers } from '../../utils/mocks';
import { getCurrentCity, getCurrentOffers, getCurrentSorting, getErrorOffersLoadingStatus, getOffers, getOffersDataLoadingStatus } from './selectors';


describe('OffersProcess selectors', () => {
  const mockFakeOffers = makeFakeOffers;

  const state: OffersProcess = {
    city: CITIES[0],
    sorting: SORTING[0],
    offers: mockFakeOffers,
    isOffersDataLoading: false,
    hasErrorOffersLoading: false,
  };

  it('should return current city from state', () => {
    const result = getCurrentCity({ [NameSpace.Offers]: state });

    expect(result).toBe(CITIES[0]);
  });

  it('should return current sorting from state', () => {
    const result = getCurrentSorting({ [NameSpace.Offers]: state });

    expect(result).toBe(SORTING[0]);
  });

  it('should return offers from state', () => {
    const result = getOffers({ [NameSpace.Offers]: state });

    expect(result).toBe(mockFakeOffers);
  });

  it('should return isOffersDataLoading from state', () => {
    const result = getOffersDataLoadingStatus({ [NameSpace.Offers]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorOffersLoading from state', () => {

    const result = getErrorOffersLoadingStatus({ [NameSpace.Offers]: state });

    expect(result).toBe(false);
  });

  it('should return getCurrentOffers from current city', () => {
    const mockFakeFilteredOffers = mockFakeOffers.filter((offer) => offer.city.name === CITIES[0].name);

    const result = getCurrentOffers({ [NameSpace.Offers]: state });

    expect(result).toEqual(mockFakeFilteredOffers);
  });
});
