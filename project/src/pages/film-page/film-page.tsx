import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddToFavorites } from '../../components/add-to-favorites/add-to-favorites';
import { FilmCard } from '../../components/film-card/film-card';
import { FilmTabs } from '../../components/film-tabs/film-tabs';
import { GoToPlayer } from '../../components/go-to-player/go-to-player';
import { ItemList } from '../../components/item-list/item-list';
import { Footer } from '../../components/ui/footer/footer';
import { Header } from '../../components/ui/header/header';
import { Loader } from '../../components/ui/loader/loader';
import { AuthorizationStatus } from '../../constants/auth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchFilm, fetchSimilarFilms } from '../../store/api-actions/film-actions/film';
import { getAuthorizationStatus } from '../../store/selectors/app';
import { getFilm, getFilmLoading, getSimilarFilms } from '../../store/selectors/film';
import { TFilm } from '../../types/film';

export const FilmPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isLoading = useAppSelector(getFilmLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [, setFilmId] = useState<number | null>(null);

  const filtredSimilarFilms = similarFilms.slice(0, 5).filter((item) => item.id !== film?.id);

  const handleMouseOver = (id: number) => {
    setFilmId(id);
  };

  useEffect(() => {
    dispatch(fetchFilm(params.id));
    dispatch(fetchSimilarFilms(params.id));
  }, [params.id, dispatch]);

  if (!film) {
    return null;
  }

  if(isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          {isLoading && <Loader />}
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <GoToPlayer id={String(params.id)} />
                <AddToFavorites id={String(params.id)} />
                {authorizationStatus === AuthorizationStatus.AUTH && <Link to={`/films/${params.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
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
