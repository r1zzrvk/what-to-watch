import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FilmCard } from '../../components/film-card/film-card';
import { FilmTabs } from '../../components/film-tabs/film-tabs';
import { ItemList } from '../../components/item-list/item-list';
import { Footer } from '../../components/ui/footer/footer';
import { Header } from '../../components/ui/header/header';
import { AuthorizationStatus } from '../../constants/auth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchFilm, fetchSimilar } from '../../store/actions/api-actions';
import { TFilm } from '../../types/film';

export const FilmPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { film, similarFilms } = useAppSelector((state) => state.film);
  const { authorizationStatus } = useAppSelector((state) => state.app);
  const [, setFilmId] = useState<number | null>(null);

  const filtredSimilarFilms = similarFilms.slice(0, 4).filter((item) => item.id !== film?.id);

  const handleMouseOver = (id: number) => {
    setFilmId(id);
  };

  useEffect(() => {
    dispatch(fetchFilm(params.id));
    dispatch(fetchSimilar(params.id));
  }, [params.id, dispatch]);

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={`/films/${params.id}/review`} className="btn film-card__button">Add review</Link>
                  : null}
              </div>

            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>
            <FilmTabs />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <ItemList items={filtredSimilarFilms} renderItem={(item: TFilm) =>
              (<FilmCard film={item} key={item.id} onMouseOver={handleMouseOver} />)}
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};
