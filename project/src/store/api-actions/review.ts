import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '..';
import { TFilm, TReview } from '../../types/film';
import { redirectToRoute } from '../actions/actions';

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

export const fetchSimilarFilms = createAsyncThunk<TFilm[], string | undefined, {
  dispatch: AppDispatch,
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
