import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchPromoFilm } from '../../store/api-actions/film';
import { getPromoFilm } from '../../store/selectors/film';
import { AddToFavorites } from '../add-to-favorites/add-to-favorites';
import { GoToPlayer } from '../go-to-player/go-to-player';
import { Header } from '../ui/header/header';

export const PromoFilm = () => {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getPromoFilm);

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (!film) {
    return null;
  }
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={film.backgroundImage} alt={film.name} />
      </div>
      <h1 className='visually-hidden'>WTW</h1>
      <Header />
      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={film.posterImage} alt={film.name} width='218' height='327' />
          </div>
          <div className='film-card__desc'>
            <h2 className='film-card__title'>{film.name}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{film.genre}</span>
              <span className='film-card__year'>{film.released}</span>
            </p>
            <div className='film-card__buttons'>
              <GoToPlayer id={String(film.id)} />
              <AddToFavorites id={String(film.id)}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
