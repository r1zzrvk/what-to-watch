import { render, screen } from '@testing-library/react';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { ListWithPagination } from './list-with-pagination';

describe('Component: ItemList', () => {
  it('should render correctly', () => {
    const films = makeFakeFilms();
    render(
      <ListWithPagination films={films} />
    );
    expect(screen.getByTestId('ListWithPagination')).toBeInTheDocument();
  });
});
