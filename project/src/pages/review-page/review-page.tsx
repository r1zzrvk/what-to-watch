import { Logo } from '../../components/ui/logo/logo';
import { ReviewForm } from '../../components/review-form/review-form';
import { UserBlock } from '../../components/ui/user-block/user-block';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilm } from '../../store/selectors/film';

export const ReviewPage = () => {
  const film = useAppSelector(getFilm);

  if (!film) {
    return null;
  }

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={''}className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>
            <UserBlock />
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <ReviewForm id={film.id}/>
        </div>
      </section>
    </div>
  );
};
