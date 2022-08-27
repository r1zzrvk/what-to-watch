import { render, screen } from '@testing-library/react';
import { Paginator } from './paginator';

describe('Component: Paginator', () => {
  it('should render correctly', () => {
    render(
      <Paginator handleClick={jest.fn()}/>
    );

    expect(screen.getByTestId('Paginator')).toBeInTheDocument();
  });
});
