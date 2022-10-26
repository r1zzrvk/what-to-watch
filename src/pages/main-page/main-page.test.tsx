import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../api/api';
import { HistoryRouter } from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilms, makeFakeReviews } from '../../utils/mocks/mocks';
import { MainPage } from './main-page';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

const reviews = makeFakeReviews();
const films = makeFakeFilms();

const store = mockStore({
  app: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: null,
    favoriteFilms: films,
    isLoading: false,
  },
  film: {
    films: films,
    genre: 'All genres',
    isLoading: false,
    film: null,
    similarFilms: films,
    promoFilm: null,
  },
  review: {
    isLoading: false,
    reviews: reviews,
  },
});
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('All genres')).toBeInTheDocument();
  });
});
