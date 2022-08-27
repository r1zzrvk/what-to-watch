import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeFakeUserData } from '../../../utils/mocks/mocks';
import { HistoryRouter } from '../../history-router/history-router';
import { UserBlock } from './user-block';

const history = createMemoryHistory();

describe('Component: UserBlock', () => {
  it('should render correctly', () => {
    const user = makeFakeUserData();
    render(
      <HistoryRouter history={history}>
        <UserBlock />
      </HistoryRouter>
    );

    expect(screen.getByText('Sign Out')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText(user.avatarUrl)).toBeInTheDocument();
  });
});
