import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';
import { AuthorizationStatus } from '../../constants/auth';
import { TFilm } from '../../types/film';
import { TUserData } from '../../types/user';

type TAppState = {
  authorizationStatus: AuthorizationStatus
  userData: TUserData | null;
  isLoading: boolean
  favoriteFilms: TFilm[]
}

const initialState: TAppState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: getUser(),
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
