import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../api/api';
import { HistoryRouter } from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm, makeFakeReviews } from '../../utils/mocks/mocks';
import { ReviewPage } from './review-page';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

const reviews = makeFakeReviews();
const film = makeFakeFilm();

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
    film: film,
    similarFilms: [],
    promoFilm: film,
  },
  review: {
    isLoading: false,
    reviews: reviews,
  },
});
const history = createMemoryHistory();

describe('Component: ReviewPage', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Post')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Review text')).toBeInTheDocument();
  });
});
