
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { HistoryRouter } from '../../components/history-router/history-router';
import { NotFoundPage } from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <NotFoundPage />
      </HistoryRouter>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
