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
