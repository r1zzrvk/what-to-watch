import { render } from '@testing-library/react';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { ItemList } from './item-list';

describe('Component: ItemList', () => {
  it('should render correctly', async () => {
    const films = makeFakeFilms();
    render(
      <ItemList items={films} renderItem={jest.fn()} />
    );
  });
});
