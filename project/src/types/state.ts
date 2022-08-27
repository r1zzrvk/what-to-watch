import { AuthorizationStatus } from '../constants/auth';
import { TFilm, TReview } from './film';
import { TUserData } from './user';

export type TAppState = {
  authorizationStatus: AuthorizationStatus
  userData: TUserData | null;
  isLoading: boolean
  favoriteFilms: TFilm[]
}

export type TFilmState = {
  films: TFilm[]
  genre: string
  isLoading: boolean
  film: TFilm | null
  similarFilms: TFilm[]
  promoFilm: TFilm | null
}

export type TReviewState = {
  isLoading: boolean
  reviews: TReview[]
}
