import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilmState } from '../../../types/state';
import { fetchFilm, fetchFilms, fetchPromoFilm, fetchSimilarFilms } from '../../api-actions/film-actions/film';

const initialState: TFilmState = {
  films: [],
  genre: 'All genres',
  isLoading: false,
  film: null,
  similarFilms: [],
  promoFilm: null,
};

export const filmReducer = createSlice({
  name: 'film',
  initialState,
  reducers: {
    changeFilters(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isLoading = false;
      });
  }
});

export const { changeFilters } = filmReducer.actions;
