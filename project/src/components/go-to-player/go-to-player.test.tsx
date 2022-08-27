import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { HistoryRouter } from '../history-router/history-router';
import { GoToPlayer } from './go-to-player';


const history = createMemoryHistory();

describe('Component: GoToPlayer', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <HistoryRouter history={history}>
        <GoToPlayer id={String(film.id)} />
      </HistoryRouter>
    );

    expect(screen.getByTestId('GoToPlayer')).toBeInTheDocument();
  });
});
