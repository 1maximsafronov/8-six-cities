export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  RoomDev = '/dev-offer',
  Favorites = '/favorites',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

export const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_LOCATION = 'Paris';

export enum SortType  {
  PriceLowToHigth = 'Price: low to high',
  PriceHightToLow = 'Price: high to low',
  TopRated = 'Top rated first',
  Popular = 'Popular'
}
