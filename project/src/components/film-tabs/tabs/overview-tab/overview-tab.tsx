import { useAppSelector } from '../../../../hooks/redux-hooks';

export const OverviewTab = () => {
  const film = useAppSelector((state) => state.film.film);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film?.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        {film?.description}
      </div>
    </>
  );
};
