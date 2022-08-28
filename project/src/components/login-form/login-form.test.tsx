import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constants/auth';
import { LoginForm } from './login-form';

describe('Component: LoginForm', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    app: { authorizationStatus: AuthorizationStatus.AUTH },
    film: { isLoading: false },
    review: { isLoading: false },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
