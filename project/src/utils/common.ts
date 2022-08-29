import { format, parseISO } from 'date-fns';
import { TFilm } from '../types/film';

export const convertMinutes = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return { hours, minutes };
};

export const convertPlayerTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = Math.floor(secs % 60);

  return { minutes, hours, seconds };
};

export const convertSingleDigit = (num: number) => String(num).padStart(2, '0');

export const playerTimeTemplate = (hours: number, mins: number, secs: number) => {
  if (hours === 0) {
    return `${convertSingleDigit(mins)}:${convertSingleDigit(secs)}`;
  } else {
    return `${convertSingleDigit(hours)}:${convertSingleDigit(mins)}:${convertSingleDigit(secs)}`;
  }
};

export const getRatingStatus = (rating: number) => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    case rating === 10:
      return 'Awesome';
    default:
      return 'Not found';
  }
};

export const convertDateFormat = (date: string) => format(parseISO(date), 'MMMM d, yyyy');

export const existingId = (films: TFilm[], id: number) => films.some((film) => film.id === id);
