export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  RoomDev = '/dev-offer',
  Favorites = '/favorites',
}

export enum APIRoute {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
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

export enum NameSpace {
  UserData = 'USER_DATA',
  AppProcess = 'APP_PROCESS',
  AppData = 'APP_DATA',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
