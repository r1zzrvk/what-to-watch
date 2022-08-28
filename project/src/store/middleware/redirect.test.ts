import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import {TState} from '../../types/state';
import { redirectToRoute } from '../actions/actions';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../utils/browser-history', () => fakeHistory);

const middlewares = [redirect];

const mockStore = configureMockStore<TState, AnyAction>(middlewares);

const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute('/login'));
    expect(fakeHistory.location.pathname).toBe('/login');
    expect(store.getActions()).toEqual([
      redirectToRoute('/login'),
    ]);
  });
});
