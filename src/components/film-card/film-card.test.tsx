import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../api/api';
import { HistoryRouter } from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { FilmCard } from './film-card';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

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
    reviews: [],
  },
});
const history = createMemoryHistory();

describe('Component: FilmCard', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmCard film={film} onMouseOver={jest.fn()}/>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByAltText('poster')).toBeInTheDocument();
  });
});
