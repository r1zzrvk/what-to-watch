import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '.';
import { TFilm } from '../types/film';

export const fetchFilms = createAsyncThunk<TFilm[], undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'film/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFilm[]>('/films');
    return data;
  }
);
