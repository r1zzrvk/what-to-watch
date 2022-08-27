import {render, screen} from '@testing-library/react';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { GenreFilter } from './genre-filter';

describe('Component: GenreFilter', () => {
  it('should render correctly', () => {
    const films = makeFakeFilms();
    render(
      <GenreFilter films={films}/>
    );

    expect(screen.getByTestId('GenreFilter')).toBeInTheDocument();
  });
});
