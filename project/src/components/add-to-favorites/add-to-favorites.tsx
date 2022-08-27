import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeFavoriteFilmStatus, fetchFavorites } from '../../store/api-actions/app-actions/app';
import { getFavoriteFilms } from '../../store/selectors/app';

type TAddToFavoritesProps = {
  id: string
}

export const AddToFavorites = ({ id }: TAddToFavoritesProps) => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFavoriteFilms);
  const isFavorite = films.some((film) => String(film.id) === id);

  const handleClick = () => {
    dispatch(changeFavoriteFilmStatus({id, status: isFavorite ? '0' : '1'}));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  },[dispatch, id, films]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {
        isFavorite
          ?
          <>
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{films.length}</span>
          </>
          :
          <>
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{films.length}</span>
          </>
      }
    </button>
  );
};
