import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { HistoryRouter } from '../history-router/history-router';
import { GenreFilter } from './genre-filter';

describe('Component: GenreFilter', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });
  it('should render correctly', () => {
    const films = makeFakeFilms();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <GenreFilter films={films} />
        </HistoryRouter>
      </Provider>

    );

    expect(screen.getByText('All genres')).toBeInTheDocument();
  });
});
