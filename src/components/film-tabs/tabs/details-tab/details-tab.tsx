import { useAppSelector } from '../../../../hooks/redux-hooks';
import { getFilm } from '../../../../store/selectors/film';
import { convertMinutes } from '../../../../utils/common';

export const DetailsTab = () => {
  const film = useAppSelector(getFilm);
  const runTime = convertMinutes(Number(film?.runTime));
  return (
    <div>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film?.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film?.starring.map((star) => <div key={star}>{star}</div>)}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{`${runTime.hours}h ${runTime.minutes}m`}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film?.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film?.released}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
