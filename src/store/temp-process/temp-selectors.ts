import { NameSpace } from '../../const';
import { Cities, OffersList, Sorting } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): Cities => state[NameSpace.TEMP].city;
export const getCurrentOffers = (state: State): OffersList => state[NameSpace.TEMP].currentOffers;
export const getCurrentSorting = (state: State): Sorting => state[NameSpace.TEMP].sorting;
