import { render, screen } from '@testing-library/react';
import { ExitButton } from './exit-button';

describe('Component: ExitButton', () => {
  it('should render correctly', () => {
    render(
      <ExitButton />
    );

    expect(screen.getByTestId('ExitButton')).toBeInTheDocument();
  });
});
