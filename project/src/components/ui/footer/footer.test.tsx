import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HistoryRouter } from '../../history-router/history-router';
import { Footer } from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Footer />
      </HistoryRouter>
    );

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
