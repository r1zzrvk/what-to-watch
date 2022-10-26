import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../../constants/auth';
import { HistoryRouter } from '../../history-router/history-router';
import { Header } from './header';

describe('Component: Header', () => {
  const history = createMemoryHistory();


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
          <Header />
        </HistoryRouter>
      </Provider>


    );
    expect(screen.getByText('T')).toBeInTheDocument();
  });
});
