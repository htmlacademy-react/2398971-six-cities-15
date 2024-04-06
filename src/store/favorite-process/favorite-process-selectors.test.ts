import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/state';
import { makeFakeFavoriteOffers } from '../../utils/mocks';
import { getErrorFavoriteOfferSendingStatus, getErrorFavoriteOffersLoadingStatus, getFavoriteOffers, getSetFavoriteOffersDataSendingStatus } from './selectors';

describe('FavoriteProcess selectors', () => {

  const state: FavoriteProcess = {
    favoriteOffers: makeFakeFavoriteOffers,
    isSetFavoriteOffersDataSending: false,
    isFavoriteOffersDataLoading: false,
    hasErrorFavoriteOffersLoading: false,
    hasErrorFavoriteOfferSending: false,
  };

  it('should return favorite offers from state', () => {
    const result = getFavoriteOffers({ [NameSpace.Favorites]: state });

    expect(result).toBe(makeFakeFavoriteOffers);
  });


  it('should return isSetFavoriteOffersDataSending status from state', () => {
    const result = getErrorFavoriteOffersLoadingStatus({ [NameSpace.Favorites]: state });

    expect(result).toBe(false);
  });

  it('should return isFavoriteOffersDataLoading status from state', () => {
    const result = getSetFavoriteOffersDataSendingStatus({ [NameSpace.Favorites]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorFavoriteOffersLoading status from state', () => {
    const result = getErrorFavoriteOffersLoadingStatus({ [NameSpace.Favorites]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorFavoriteOfferSending status from state', () => {
    const result = getErrorFavoriteOfferSendingStatus({ [NameSpace.Favorites]: state });

    expect(result).toBe(false);
  });
});
