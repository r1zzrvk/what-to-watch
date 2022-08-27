import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm, makeFakeGenre } from '../../utils/mocks/mocks';
import { HistoryRouter } from '../history-router/history-router';
import { App } from './app';


const history = createMemoryHistory();

const mockStore = configureMockStore();
const store = mockStore({
  app: {authorizationStatus: AuthorizationStatus.AUTH},
  film: {isLoading: false},
  review: {isLoading: false},
});

const film = makeFakeFilm();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {

    history.push('/');

    const genre = makeFakeGenre();

    render(fakeApp);

    expect(screen.getByText(genre)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push('/login');

    render(fakeApp);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render "FilmPage" when user navigate to "/films/:id"', () => {
    history.push(`/films/${film.id}`);

    render(fakeApp);

    expect(screen.getByText(film.name)).toBeInTheDocument();
  });

  it('should render "mylist" when user navigate to "/mylist"', () => {
    history.push('/mylist');

    render(fakeApp);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('should render "PlayerPage" when user navigate to "/player/:id"', () => {
    history.push(`/player/${film.id}`);

    render(fakeApp);

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should render "ReviewPage" when user navigate to "/films/:id/review"', () => {
    history.push(`/films/${film.id}/review`);

    render(fakeApp);

    expect(screen.getByText('Post')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Oops, something went wrong')).toBeInTheDocument();
  });
});
