export const Setting = {
  PlaceCardCount: 5
};

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Main = '/',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';

export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

export const CITIES = [
  {
    'id': 'paris',
    'name': 'Paris',
    'location': {'latitude': 48.85661,'longitude': 2.351499,'zoom': 13 }
  },
  {
    'id': 'cologne',
    'name': 'Cologne',
    'location': {'latitude': 50.938361, 'longitude': 6.959974, 'zoom': 13}
  },
  {
    'id': 'brussels',
    'name': 'Brussels',
    'location': {'latitude': 50.846557, 'longitude': 4.351697, 'zoom': 13}
  },
  {
    'id': 'amsterdam',
    'name': 'Amsterdam',
    'location': {'latitude': 52.37454, 'longitude': 4.897976, 'zoom': 13}
  },
  {
    'id': 'hamburg',
    'name': 'Hamburg',
    'location': {'latitude': 53.550341, 'longitude': 10.000654, 'zoom': 13}
  },
  {
    'id': 'dusseldorf',
    'name': 'Dusseldorf',
    'location': {'latitude': 51.225402, 'longitude': 6.776314, 'zoom': 13}
  },
];

export const SORTING = [
  {
    'id': 'popular',
    'name': 'Popular',
  },
  {
    'id': 'price_low_to_high',
    'name': 'Price: low to high',
  },
  {
    'id': 'price_high_to_low',
    'name': 'Price: high to low',
  },
  {
    'id': 'top_rated_first',
    'name':  'Top rated first',
  },
];
