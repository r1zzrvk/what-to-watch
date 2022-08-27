import { Link } from 'react-router-dom';

type TGoToPlayerProps = {
  id: string
}

export const GoToPlayer = ({ id }: TGoToPlayerProps) => (
  <Link className="btn btn--play film-card__button" type="button" to={`/player/${id}`}>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </Link>
);
