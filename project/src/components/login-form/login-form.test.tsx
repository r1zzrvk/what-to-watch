import { render, screen } from '@testing-library/react';
import { LoginForm } from './login-form';

describe('Component: LoginForm', () => {
  it('should render correctly', () => {
    render(
      <LoginForm />
    );

    expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
  });
});
