import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeFakeFilm, makeFakeReviews } from '../../../utils/mocks/mocks';
import { addReview, fetchReviews } from './review';
import { createAPI } from '../../../api/api';
import { TState } from '../../../types/state';

describe('Async review actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    TState,
    Action,
    ThunkDispatch<TState, typeof api, Action>
  >(middlewares);

  const reviews = makeFakeReviews();
  const film = makeFakeFilm();

  it('fetchReviews: should fetch Reviews when GET /comment/:id', async () => {

    mockAPI.onGet(`/comment/${film.id}`).reply(200, reviews);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(fetchReviews());

    expect(actions).toEqual([]);
  });

  it('addReview: should add Review when POST /comment/:id', async () => {

    const comment = 'comment';
    const rating = 10;

    mockAPI.onPost(`/comment/${film.id}`, {comment, rating}).reply(200, reviews);

    const store = mockStore();
    const actions = store.getActions().map(({type}) => type);

    await store.dispatch(addReview(({comment: comment, rating: rating, id: film.id})));

    expect(actions).toEqual([]);
  });
});
