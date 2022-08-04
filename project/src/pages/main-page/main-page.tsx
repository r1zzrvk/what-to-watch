import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmCard } from '../../components/film-card/film-card';
import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { Header } from '../../components/header/header';
import { ItemList } from '../../components/item-list/item-list';
import { useAppSelector } from '../../hooks/redux-hooks';
import { TFilm } from '../../types/film';

type TMainPageProps = {
  films: TFilm[]
};

export const MainPage = ({ films }: TMainPageProps) => {
  const { genre } = useAppSelector((state) => state.film);
  const [filtred, setFiltred] = useState<TFilm[]>([]);
  const [filmId, setFilmId] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleMouseOver = (id: number) => {
    setFilmId(id);
  };

  useEffect(() => {
    setFiltred(films.filter((film: TFilm) => film.genre === genre));

    if (genre === 'All genres') {
      setFiltred(films);
    }

  }, [genre, films]);

  return (
    <div>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel' />
        </div>
        <h1 className='visually-hidden'>WTW {filmId}</h1>
        <Header />
        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>The Grand Budapest Hotel</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>Drama</span>
                <span className='film-card__year'>2014</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button' onClick={() => navigate('/mylist')}>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <GenreFilter />
          <div className='catalog__films-list'>
            <ItemList
              items={filtred}
              renderItem={(item: TFilm) => <FilmCard film={item} key={item.id} onMouseOver={handleMouseOver} />}
            />
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <footer className='page-footer'>
          <div className='logo'>
            <a className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>
          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
