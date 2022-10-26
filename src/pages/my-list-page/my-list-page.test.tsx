import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import { HistoryRouter } from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm, makeFakeFilms, makeFakeReviews, makeFakeUserData } from '../../utils/mocks/mocks';
import { MyListPage } from './my-list-page';
import thunk from 'redux-thunk';

describe('Component: MyListPage', () => {
  it('should render correctly', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const film = makeFakeFilm();
    const films = makeFakeFilms();
    const user = makeFakeUserData();
    const reviews = makeFakeReviews();

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
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MyListPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});
