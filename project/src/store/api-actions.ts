import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '.';
import { dropToken, saveToken } from '../api/token';
import { AuthorizationStatus } from '../constants/auth';
import { TAuthData } from '../types/auth';
import { TFilm } from '../types/film';
import { TUserData } from '../types/user';
import { redirectToRoute } from './actions';
import { setAuthorizationStatus, setUserData } from './app-reducer';

export const fetchFilms = createAsyncThunk<TFilm[], undefined, {
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchFilms',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TFilm[]>('/films');
      return data;
    } catch (e) {
      throw new Error(String(e));
    }
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'app/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get('/login');
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    } catch (e) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      throw new Error(String(e));
    }
  }
);

export const loginIn = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'app/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserData>('/login', { email, password });
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
    dispatch(setUserData(data));
    dispatch(redirectToRoute('/'));
  },
);

export const logOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'app/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/logout');
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  },
);

export const fetchFilm = createAsyncThunk<TFilm, string | undefined, {
  state: RootState,
  extra: AxiosInstance
}>(
  'app/logout',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<TFilm>(`/films/${id}`);
      return data;
    } catch (e) {
      throw new Error(String(e));
    }
  },
);
