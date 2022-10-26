import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../../../api/api';
import { AuthorizationStatus } from '../../../../constants/auth';
import { HistoryRouter } from '../../../history-router/history-router';
import { ReviewsTab } from './reviews-tab';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

const store = mockStore({
  app: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: null,
    favoriteFilms: [],
    isLoading: false,
  },
  film: {
    films: [],
    genre: 'All genres',
    isLoading: false,
    film: null,
    similarFilms: [],
    promoFilm: null,
  },
  review: {
    isLoading: false,
    reviews: [],
  },
});
const history = createMemoryHistory();

describe('Component: ReviewsTab', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewsTab />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('No reviews found')).toBeInTheDocument();
  });
});
