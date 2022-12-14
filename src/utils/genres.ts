import { TFilm } from '../types/film';

export const generateGenres = (films: TFilm[]): string[]=> {
  const genres: Set<string> = new Set();

  genres.add('All genres');
  films.forEach(({genre}) => genres.add(genre));

  return [...genres];
};
