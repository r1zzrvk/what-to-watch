import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../constants/auth';
import { TFilm } from '../../../types/film';
import { TAppState } from '../../../types/state';
import { TUserData } from '../../../types/user';

const initialState: TAppState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: null,
  favoriteFilms: [],
  isLoading: false,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<TUserData | null>) {
      state.userData = action.payload;
    },
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setFavoriteFilms(state, action: PayloadAction<TFilm[]>) {
      state.favoriteFilms = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
});

export const { setUserData, setAuthorizationStatus, setFavoriteFilms, setIsLoading} = appReducer.actions;
