import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HistoryRouter } from '../../history-router/history-router';
import { ExitButton } from './exit-button';

describe('Component: ExitButton', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ExitButton />
      </HistoryRouter>

    );

    expect(screen.getByText('Exit')).toBeInTheDocument();
  });
});
