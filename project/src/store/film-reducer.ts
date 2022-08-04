import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilm } from '../types/film';

type TFilmState = {
  films: TFilm[]
  genre: string
}

const initialState: TFilmState = {
  films: [],
  genre: 'All genres',
};

export const filmReducer = createSlice({
  name: 'film',
  initialState,
  reducers: {
    changeFilters( state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
  }
});

export const { changeFilters } = filmReducer.actions;
