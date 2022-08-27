import { datatype, image, internet, random } from 'faker';
import { TFilm, TReview } from '../../types/film';
import { TUserData } from '../../types/user';

const GENRES = {
  all: 'All Genres',
  crime: 'Crime',
  comedy: 'Comedy',
  thriller: 'Thriller',
  action: 'Action',
  adventure: 'Adventure',
  fantasy: 'Fantasy',
  drama: 'Drama',
};

export const makeFakeGenre = () => random.objectElement(GENRES);

export const makeFakeFilm = (): TFilm => ({
  id: datatype.number(),
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  previewVideoLink: internet.url(),
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray'
  ],
  runTime: 99,
  genre: makeFakeGenre(),
  released: 2014,
  isFavorite: false,
});

export const makeFakeFilms = (): TFilm[] => (new Array(datatype.number(30)).fill(null).map(makeFakeFilm));

export const makeFakeToken = () => datatype.string(16);

export const makeFakeReview = (): TReview => ({
  comment: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics',
  date: 'Thu Jun 14 2022 12:02:01 GMT+0700 (GMT+07:00)',
  id: datatype.number(),
  rating: 6.1,
  user: {
    id: datatype.number(),
    name: 'Emely'
  }
});

export const makeFakeReviews = (): TReview[] => (new Array(datatype.number(5)).fill(null).map(makeFakeReview));

export const makeFakeUserData = (): TUserData => ({
  avatarUrl: image.imageUrl(),
  email: 'r1zzrvk@nail.ru',
  id: datatype.number(),
  name: 'r1zzrvl',
  token: makeFakeToken()
});
