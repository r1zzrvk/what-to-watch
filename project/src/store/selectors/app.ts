import { createSelector } from 'reselect';
import { RootState } from '..';

const getAppState = (state: RootState) => state.app;

export const getAuthorizationStatus = createSelector(getAppState, (state) => state.authorizationStatus);

export const getUserData = createSelector(getAppState, (state) => state.userData);

export const getFavoriteFilms = createSelector(getAppState, (state) => state.favoriteFilms);
