import MockAdapter from 'axios-mock-adapter';
import { api, RootState } from '../..';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeFilm, makeFakeFilms } from '../../../utils/mocks/mocks';
import { fetchFilm, fetchFilms, fetchPromoFilm, fetchSimilarFilms } from './film';

describe('Async film actions', () => {
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  const film = makeFakeFilm();
  const films = makeFakeFilms();
  it('fetchFilms: should fetch Films when GET /films', async () => {

    mockAPI.onGet('/films').reply(200, films);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(fetchFilms());

    expect(actions).toEqual([
      fetchFilms.pending.type,
      fetchFilms.fulfilled.type,
    ]);
  });

  it('fetchFilm: should fetch Film when GET /films/:id', async () => {
    mockAPI.onGet(`/comment/${film.id}`).reply(200, film);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(fetchFilm(String(film.id)));

    expect(actions).toEqual([
      fetchFilm.pending.type,
      fetchFilm.fulfilled.type,
    ]);
  });

  it('fetchSimilarFilms: should fetch Films when GET /films/:id/similar', async () => {

    mockAPI.onGet(`/films/${film.id}/similar`).reply(200, films);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(fetchSimilarFilms((String(film.id))));

    expect(actions).toEqual([
      fetchSimilarFilms.pending.type,
      fetchSimilarFilms.fulfilled.type,
    ]);
  });

  it('fetchPromoFilm: should fetch Film when GET /promo', async () => {
    mockAPI.onGet('/promo').reply(200, film);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(fetchPromoFilm());

    expect(actions).toEqual([
      fetchPromoFilm.pending.type,
      fetchPromoFilm.fulfilled.type,
    ]);
  });
});
