import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL, TIMEOUT } from '../constants/service';
import { getToken } from './token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );
  return api;
};
