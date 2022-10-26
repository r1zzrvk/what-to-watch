import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HistoryRouter } from '../../history-router/history-router';
import { Tab } from './tab';

describe('Component: Tab', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Tab tab={'Overview'} activeTab={'Overview'} onClick={jest.fn()} />
      </HistoryRouter>
    );

    expect(screen.getByText('Overview')).toBeInTheDocument();
  });
});
