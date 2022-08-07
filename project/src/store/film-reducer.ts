import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/film';
import { fetchFilms } from './actions';

type TFilmState = {
  films: TFilm[]
  genre: string
  isLoading: boolean
}

const initialState: TFilmState = {
  films: [],
  genre: 'All genres',
  isLoading: false
};

export const filmReducer = createSlice({
  name: 'film',
  initialState,
  reducers: {
    changeFilters(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    setFilms(state, action) {
      state.films = action.payload;
    },
    setFetching(state, action) {
      state.films = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      });
  }
});

export const { changeFilters, setFilms, setFetching } = filmReducer.actions;
