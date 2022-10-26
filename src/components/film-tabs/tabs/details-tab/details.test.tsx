import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../../../constants/auth';
import { DetailsTab } from './details-tab';

describe('Component: DetailsTab', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <DetailsTab />
      </Provider>

    );

    expect(screen.getByText('Director')).toBeInTheDocument();
    expect(screen.getByText('Run Time')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
  });
});
