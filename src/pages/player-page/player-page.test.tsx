import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../api/api';
import { HistoryRouter } from '../../components/history-router/history-router';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { PlayerPage } from './player-page';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middleware);

const film = makeFakeFilm();

const store = mockStore({
  film: {
    films: [],
    genre: 'All genres',
    isLoading: false,
    film: film,
    similarFilms: [],
    promoFilm: film,
  },
});
const history = createMemoryHistory();

beforeAll(() => {
  window.HTMLVideoElement.prototype.play = () => Promise.resolve();
  window.HTMLVideoElement.prototype.pause = jest.fn();
});

describe('Component: PlayerPage', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlayerPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });
});
