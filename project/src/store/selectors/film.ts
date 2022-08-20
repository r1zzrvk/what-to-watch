import { createSelector } from 'reselect';
import { RootState } from '..';

const getFilmState = (state: RootState) => state.film;

export const getFilms = createSelector(getFilmState, (state) => state.films);

export const getFilm = createSelector(getFilmState, (state) => state.film);

export const getFilmLoading = createSelector(getFilmState, (state) => state.isLoading);

export const getGenre = createSelector(getFilmState, (state) => state.genre);

export const getSimilarFilms = createSelector(getFilmState, (state) => state.similarFilms);

