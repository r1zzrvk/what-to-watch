import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/auth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeFavoriteFilmStatus, fetchFavorites } from '../../store/api-actions/app-actions/app';
import { getAuthorizationStatus, getFavoriteFilms } from '../../store/selectors/app';

type TAddToFavoritesProps = {
  id: string
}

export const AddToFavorites = ({ id }: TAddToFavoritesProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const films = useAppSelector(getFavoriteFilms);
  const isFavorite = films.some((film) => String(film.id) === id);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handleClick = () => {
    if(authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(changeFavoriteFilmStatus({id, status: isFavorite ? '0' : '1'})).then(() => dispatch(fetchFavorites()));
    } else {
      return navigate('/login');
    }
  };

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
