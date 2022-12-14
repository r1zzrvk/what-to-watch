import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../..';
import { TFilm } from '../../../types/film';
import { redirectToRoute } from '../../actions/actions';

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

export const fetchFilm = createAsyncThunk<TFilm, string | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchFilm',
  async (id, { dispatch,extra: api }) => {
    try {
      const { data } = await api.get<TFilm>(`/films/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute('*'));
      throw new Error(String(e));
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<TFilm[], string | undefined, {
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilms',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<TFilm[]>(`/films/${id}/similar`);
      return data;
    } catch (e) {
      throw new Error(String(e));
    }
  },
);

export const fetchPromoFilm = createAsyncThunk<TFilm, undefined, {
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TFilm>('/promo');
      return data;
    } catch (e) {
      throw new Error(String(e));
    }
  },
);
