import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../api/api';
import { HistoryRouter } from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm, makeFakeFilms, makeFakeReviews } from '../../utils/mocks/mocks';
import { FilmPage } from './film-page';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

const reviews = makeFakeReviews();
const films = makeFakeFilms();
const film = makeFakeFilm();

const store = mockStore({
  app: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: null,
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
const history = createMemoryHistory();

describe('Component: FilmPage', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
