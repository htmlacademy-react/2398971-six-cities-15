import {datatype, lorem, image, name, internet, date} from 'faker';
import { Comment, CurrentOffer, OfferList } from '../types/offer';
import { UserData } from '../types/user-data';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { createAPI } from '../services/api';
import { AuthorizationStatus, CITIES, NameSpace, SORTING } from '../const';

export const CITIES_MOCK = [
  {
    'name': 'Paris',
    'location': {'latitude': 48.85661,'longitude': 2.351499,'zoom': 13 }
  },
  {
    'name': 'Cologne',
    'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
  },
  {
    'name': 'Brussels',
    'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}
  },
  {
    'name': 'Amsterdam',
    'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
  },
  {
    'name': 'Hamburg',
    'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
  },
  {
    'name': 'Dusseldorf',
    'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
  },
];

export const makeFakeOffer = (): OfferList => ({
  id: datatype.uuid(),
  title: lorem.sentence(),
  type: lorem.word(),
  price: datatype.number({ min: 100, max: 1000 }),
  city: CITIES_MOCK[datatype.number({ min: 0, max: 5 })],
  location: {
    latitude: datatype.float(),
    longitude: datatype.float(),
    zoom: datatype.number({ min: 5, max: 10 }),
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 0, max: 5 }),
  previewImage: image.imageUrl(),
} as OfferList);

export const makeFakeOffers = Array.from({length: 20}, () => makeFakeOffer());
export const makeFakeNearOffers = Array.from({length: 3}, () => makeFakeOffer());

export const makeFakeCurrentOffer = (id?: string, isFavorite?: boolean): CurrentOffer => ({
  id: id || datatype.uuid(),
  title: 'Molestias eius odit accusantium dolores in earum.',
  type: 'eligendi',
  price: 314,
  city: {
    name: 'Hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 }
  },
  location: { latitude: 22080.86, longitude: 56866.02, zoom: 10 },
  isFavorite: isFavorite || datatype.boolean(),
  isPremium: false,
  rating: 1,
  description: 'Libero sapiente aliquam occaecati.',
  images: [
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480'
  ],
  goods: [ 'earum', 'veritatis', 'dolorum', 'itaque', 'est', 'amet' ],
  host: {
    isPro: true,
    name: 'Alanna',
    avatarUrl: 'http://placeimg.com/640/480'
  },
  bedrooms: 2,
  maxAdults: 9
} as CurrentOffer);

export const makeFakeFavoriteOffer = (id?: string, isFavorite?: boolean): OfferList => ({
  id: id || datatype.uuid(),
  title: 'Molestias eius odit accusantium dolores in earum.',
  type: 'eligendi',
  price: 314,
  city: {
    name: 'Hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 }
  },
  location: { latitude: 22080.86, longitude: 56866.02, zoom: 10 },
  isFavorite: isFavorite || datatype.boolean(),
  isPremium: false,
  rating: 1,
  previewImage: 'http://placeimg.com/640/480',
} as OfferList);

export const makeFakeFavoriteOffers = Array.from({length: 3}, () => makeFakeFavoriteOffer(undefined, true));

export const makeFakeComment = (): Comment => ({
  id: datatype.uuid(),
  date: date.recent().toDateString(),
  user: {
    isPro: datatype.boolean(),
    name: name.firstName(),
    avatarUrl: image.imageUrl(),
  },
  comment: lorem.word(200),
  rating: datatype.number({ min: 0, max: 5 }),
} as Comment);

export const makeFakeComments = Array.from({length: 5}, () => makeFakeComment());

export const makeFakeUserData = (): UserData => ({
  name: name.firstName(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
  email: internet.email() ,
  token: datatype.uuid(),
});

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: null
  },
  [NameSpace.Offers]: {
    city: CITIES[0],
    sorting: SORTING[0],
    offers: [],
    isOffersDataLoading: true,
    hasErrorOffersLoading: false,
  },
  [NameSpace.Offer]: {
    offer: null,
    nearOffers: [],
    isOfferDataLoading: [true, true],
    hasErrorOfferLoading: false,
    hasErrorNearOffersLoading: false,
  },
  [NameSpace.Favorites]: {
    favoriteOffers: [],
    isSetFavoriteOffersDataSending: false,
    isFavoriteOffersDataLoading: true,
    hasErrorFavoriteOffersLoading: false,
    hasErrorFavoriteOfferSending: false,
  },
  [NameSpace.Comments]: {
    comments: [],
    isSendNewCommentDataLoading: false,
    isCommentsDataLoading: true,
    hasErrorCommentLoading: false,
    hasErrorCommentSending: false,
  },
  ...initialState ?? {},
});
