import { makeFakeGenre } from '../../../utils/mocks/mocks';
import { changeFilters, filmReducer } from './film-reducer';

describe('Reducer: Film', () => {
  const state = {
    films: [],
    genre: 'All genres',
    isLoading: false,
    film: null,
    similarFilms: [],
    promoFilm: null,
  };


  const genre = makeFakeGenre();

  it('without additional parameters should return initial state', () => {
    expect(filmReducer.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('changeFilters test', () => {
    it('should update genre to payload', () => {
      expect(filmReducer.reducer(state, { type: changeFilters, payload: genre }))
        .toEqual({ ...state, genre: genre });
    });
  });
});
