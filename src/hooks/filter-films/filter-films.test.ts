import {renderHook} from '@testing-library/react';
import { makeFakeFilms } from '../../utils/mocks/mocks';
import { useFiltredFilms } from './filter-films';

describe('Hook: useFiltredFilms', () => {
  const films = makeFakeFilms();

  it('should return array', () => {
    const {result} = renderHook(() =>
      useFiltredFilms('All genres', films)
    );

    expect(result.current).toBeInstanceOf(Array);
  });
});
