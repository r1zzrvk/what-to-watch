import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '..';
import { dropToken, saveToken } from '../../api/token';
import { dropUser, saveUser } from '../../api/user';
import { AuthorizationStatus } from '../../constants/auth';
import { TAuthData } from '../../types/auth';
import { TFilm, TReview } from '../../types/film';
import { TUserData } from '../../types/user';
import { redirectToRoute } from './actions';
import { setAuthorizationStatus } from '../reducers/app-reducer';

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
    saveUser(data);
    dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
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
    dropUser();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  },
);

export const fetchFilm = createAsyncThunk<TFilm, string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TFilm>(`/films/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute('*'));
      throw new Error(String(e));
    }
  },
);

export const fetchReviews = createAsyncThunk<TReview[], string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'review/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TReview[]>(`/comments/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute('*'));
      throw new Error(String(e));
    }
  },
);

export const addReview = createAsyncThunk<void, { rating: number, comment: string } & { id: number }, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'review/addReview',
  async ({ rating, comment, id }, { dispatch, extra: api }) => {
    try {
      await api.post<TReview[]>(`/comments/${id}`, { comment, rating });
      dispatch(redirectToRoute(`/films/${id}`));
    } catch (e) {
      throw new Error(String(e));
    }
  },
);

export const fetchSimilar = createAsyncThunk<TFilm[], string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchSimilar',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<TFilm[]>(`/films/${id}/similar`);
      return data;
    } catch (e) {
      throw new Error(String(e));
    }
  },
);
