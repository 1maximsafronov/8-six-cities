import axios from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;


export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
