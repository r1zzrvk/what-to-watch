import { useAppSelector } from '../../../../hooks/redux-hooks';
import { getFilm } from '../../../../store/selectors/film';
import { getRatingStatus } from '../../../../utils/common';

export const OverviewTab = () => {
  const film = useAppSelector(getFilm);
  const starring = film?.starring.slice(0, 3).join(', ');

  if(!film) {
    return null;
  }
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingStatus(Number(film.rating))}</span>
          <span className="film-rating__count">{film?.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {film?.description}
      </div>
      <p className="film-card__director"><strong>Director: {film.director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {starring} and others</strong></p>
    </>
  );
};
