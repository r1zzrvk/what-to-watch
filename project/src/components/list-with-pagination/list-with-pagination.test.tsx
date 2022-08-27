import { render, screen } from '@testing-library/react';
import { makeFakeFilm, makeFakeFilms } from '../../utils/mocks/mocks';
import { ListWithPagination } from './list-with-pagination';

describe('Component: ItemList', () => {
  it('should render correctly', () => {
    const films = makeFakeFilms();
    const film = makeFakeFilm();
    render(
      <ListWithPagination films={films} />
    );
    expect(screen.getByText(film.name)).toBeInTheDocument();
  });
});
