import {render, screen} from '@testing-library/react';
import { makeFakeFilms, makeFakeGenre } from '../../utils/mocks/mocks';
import { GenreFilter } from './genre-filter';

describe('Component: GenreFilter', () => {
  it('should render correctly', () => {
    const films = makeFakeFilms();
    const genre = makeFakeGenre();
    render(
      <GenreFilter films={films}/>
    );

    expect(screen.getByText(genre)).toBeInTheDocument();
  });
});
