import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeFilm, makeFakeFilms, makeFakeToken } from '../../../utils/mocks/mocks';
import { changeFavoriteFilmStatus, checkAuth, fetchFavorites, loginIn, logOut } from './app';
import { createAPI } from '../../../api/api';
import { TState } from '../../../types/state';

describe('Async App actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    TState,
    Action,
    ThunkDispatch<TState, typeof api, Action>
  >(middlewares);

  const film = makeFakeFilm();
  const films = makeFakeFilms();
  const token = makeFakeToken();
  it('checkAuth: should update authorizationStatus when GET /login', async () => {

    mockAPI.onGet('/login').reply(200, { token: token });

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    const actions = store.getActions().map(({ type }) => type);

    Storage.prototype.setItem = jest.fn();
    await store.dispatch(loginIn({ login: 'r1zzrvk@mail.ru', password: '1q2w3e4r5t' }));

    expect(actions).toEqual([]);
  });

  it('loginIn: should update authorizationStatus and setUserData when POST /login', async () => {

    mockAPI.onPost('/login').reply(200, []);

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    const actions = store.getActions().map(({ type }) => type);

    await store.dispatch(checkAuth());

    expect(actions).toEqual([]);
  });

  it('logOut: should update authorizationStatus when DELETE /logout', async () => {

    mockAPI.onDelete('/logout').reply(204);

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    const actions = store.getActions().map(({ type }) => type);

    await store.dispatch(logOut());

    Storage.prototype.removeItem = jest.fn();

    expect(actions).toEqual([]);
  });

  it('fetchFavorites: should fetch Films when GET /favorite', async () => {

    mockAPI.onGet('/favorite').reply(200, films);

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    const actions = store.getActions().map(({ type }) => type);

    await store.dispatch(fetchFavorites());

    expect(actions).toEqual([]);
  });

  it('changeFavoriteFilmStatus: add Film to favorites POST /favorite/:id/:status', async () => {
    const status = '1';

    mockAPI.onPost(`/favorite/${film.id}/${status}`).reply(200, films);
    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    const actions = store.getActions().map(({ type }) => type);

    await store.dispatch(changeFavoriteFilmStatus({ id: String(film.id), status: status }));

    expect(actions).toEqual([]);
  });
});
