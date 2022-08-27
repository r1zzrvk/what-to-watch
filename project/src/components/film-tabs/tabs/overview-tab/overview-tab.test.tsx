import {render, screen} from '@testing-library/react';
import { makeFakeFilm } from '../../../../utils/mocks/mocks';
import { OverviewTab } from './overview-tab';

describe('Component: OverviewTab', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <OverviewTab />
    );

    expect(screen.getByText(film.rating)).toBeInTheDocument();
    expect(screen.getByText(film.scoresCount)).toBeInTheDocument();
    expect(screen.getByText(film.description)).toBeInTheDocument();
    expect(screen.getByText(film.director)).toBeInTheDocument();
  });
});
