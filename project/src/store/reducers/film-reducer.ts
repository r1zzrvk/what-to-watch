import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../../types/film';
import { fetchFilm, fetchFilms, fetchSimilar } from '../actions/api-actions';

type TFilmState = {
  films: TFilm[]
  genre: string
  isLoading: boolean
  film: TFilm | null
  similarFilms: TFilm[]
}

const initialState: TFilmState = {
  films: [],
  genre: 'All genres',
  isLoading: false,
  film: null,
  similarFilms: [],
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
      .addCase(fetchSimilar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isLoading = false;
      });
  }
});

export const { changeFilters } = filmReducer.actions;
