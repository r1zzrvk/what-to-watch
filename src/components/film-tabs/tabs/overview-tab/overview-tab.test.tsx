import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../../../constants/auth';
import { OverviewTab } from './overview-tab';

describe('Component: OverviewTab', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <OverviewTab />
      </Provider>
    );
  });
});
