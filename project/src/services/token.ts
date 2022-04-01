const TOKENT_KEY_NAME = 'six-cities-8-token';

export type Token = string;

export const getToken = ():Token => {
  const token = localStorage.getItem(TOKENT_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token) => {
  localStorage.setItem(TOKENT_KEY_NAME, token);
};

export const dropToken = ():void => {
  localStorage.removeItem(TOKENT_KEY_NAME);
};
