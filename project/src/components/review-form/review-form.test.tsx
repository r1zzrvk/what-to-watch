import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { HistoryRouter } from '../history-router/history-router';
import { ReviewForm } from './review-form';

const history = createMemoryHistory();

const mockStore = configureMockStore();
const store = mockStore({
  app: { authorizationStatus: AuthorizationStatus.AUTH },
  film: { isLoading: false },
  review: { isLoading: false },
});

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm id={film.id} />
        </HistoryRouter>
      </Provider>

    );

    expect(screen.getByText('Post')).toBeInTheDocument();
  });
});
