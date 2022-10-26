import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm, makeFakeFilms, makeFakeReviews, makeFakeUserData } from '../../utils/mocks/mocks';
import { App } from './app';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createAPI } from '../../api/api';
import { TState } from '../../types/state';
import { Action } from '@reduxjs/toolkit';


const history = createMemoryHistory();
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  TState,
  Action,
  ThunkDispatch<TState, typeof api, Action>
>(middlewares);

const reviews = makeFakeReviews();
const films = makeFakeFilms();
const film = makeFakeFilm();
const user = makeFakeUserData();
const store = mockStore({
  app: {
    authorizationStatus: AuthorizationStatus.UNKNOWN,
    userData: user,
    favoriteFilms: films,
    isLoading: false,
  },
  film: {
    films: films,
    genre: 'All genres',
    isLoading: false,
    film: film,
    similarFilms: films,
    promoFilm: film,
  },
  review: {
    isLoading: false,
    reviews: reviews,
  },
});

const fakeApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {

    history.push('/');

    render(fakeApp);

  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push('/login');

    render(fakeApp);

  });

  it('should render "FilmPage" when user navigate to "/films/:id"', () => {
    history.push(`/films/${film.id}`);

    render(fakeApp);

  });

  it('should render "mylist" when user navigate to "/mylist"', () => {
    history.push('/mylist');

    render(fakeApp);

  });

  it('should render "PlayerPage" when user navigate to "/player/:id"', () => {
    history.push(`/player/${film.id}`);

    render(fakeApp);

  });

  it('should render "ReviewPage" when user navigate to "/films/:id/review"', () => {
    history.push(`/films/${film.id}/review`);

    render(fakeApp);

  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

  });
});
