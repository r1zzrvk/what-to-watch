import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../../constants/auth';
import { HistoryRouter } from '../../history-router/history-router';
import { UserBlock } from './user-block';

const history = createMemoryHistory();

describe('Component: UserBlock', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>

    );

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });
});
