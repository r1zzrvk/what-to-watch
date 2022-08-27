import {render, screen} from '@testing-library/react';
import { makeFakeFilm } from '../../../../utils/mocks/mocks';
import { DetailsTab } from './details-tab';

describe('Component: DetailsTab', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <DetailsTab />
    );

    expect(screen.getByText(film.director)).toBeInTheDocument();
    expect(screen.getByText(film.runTime)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
  });
});
