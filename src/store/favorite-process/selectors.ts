import { NameSpace } from '../../const';
import { OffersList } from '../../types/offer';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: State): OffersList => state[NameSpace.Favorites].favoriteOffers;
