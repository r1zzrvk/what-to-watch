import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });
});
