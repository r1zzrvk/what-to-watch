import { format, parseISO } from 'date-fns';

export const convertMinutes = (mins: number, isPlayer: boolean) => {
  const hour = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return isPlayer ? `${hour}:${minutes}` : `${hour}h ${minutes}m`;
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
