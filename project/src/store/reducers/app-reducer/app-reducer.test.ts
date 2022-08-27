import { makeFakeFilms, makeFakeUserData } from '../../../utils/mocks/mocks';
import { appReducer, setAuthorizationStatus, setFavoriteFilms, setIsLoading, setUserData } from './app-reducer';
import { AuthorizationStatus } from '../../../constants/auth';

describe('Reducer: App', () => {
  const state = {
    authorizationStatus: AuthorizationStatus.UNKNOWN,
    userData: null,
    isLoading: false,
    favoriteFilms: [],
  };


  const user = makeFakeUserData();
  const films = makeFakeFilms();

  it('without additional parameters should return initial state', () => {
    expect(appReducer.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('setUserData test', () => {
    it('should load userData if loginIn was fulfilled', () => {
      expect(appReducer.reducer(state, { type: setUserData, payload: user }))
        .toEqual({ ...state, userData: user });
    });
  });

  describe('setAuthorizationStatus test', () => {
    it('should update authorizationStatus to payload', () => {
      expect(appReducer.reducer(state, { type: setAuthorizationStatus, payload: AuthorizationStatus.AUTH }))
        .toEqual({ ...state, authorizationStatus: AuthorizationStatus.AUTH });
    });
  });

  describe('setFavoriteFilms test', () => {
    it('should update favoriteFilms to payload', () => {
      expect(appReducer.reducer(state, { type: setFavoriteFilms, payload: films }))
        .toEqual({ ...state, favoriteFilms: films });
    });
  });

  describe('setIsLoading test', () => {
    it('should update isLoading to payload', () => {
      expect(appReducer.reducer(state, { type: setIsLoading, payload: true }))
        .toEqual({ ...state, isLoading: true });
    });
  });
});
