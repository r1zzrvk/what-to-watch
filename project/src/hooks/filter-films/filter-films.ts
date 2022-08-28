import { useMemo } from 'react';
import { TFilm } from '../../types/film';

export const useFiltredFilms = (genre: string, films: TFilm[]): TFilm[] => {
  const filtredFilms = useMemo(() => {
    if (genre === 'All genres') {
      return films;
    }

    return films.filter((film: TFilm) => film.genre === genre);

  }, [genre, films]);

  return filtredFilms;
};
