import { useState } from 'react';
import { FilmCard } from '../../components/film-card/film-card';
import { ItemList } from '../../components/item-list/item-list';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { TFilm } from '../../types/film';

type TMyListPageProps = {
  films: TFilm[]
}

export const MyListPage = ({films}: TMyListPageProps) => {
  const [filmId, setFilmId] = useState<number | null>(null);

  const onMouseOver = (id: number) => {
    setFilmId(id);
  };
  return (
    <div>
      <div>
        <div className='user-page'>
          <header className='page-header user-page__head'>
            <Logo />
            <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>{filmId}</span></h1>
            <UserBlock />
          </header>

          <section className='catalog'>
            <h2 className='catalog__title visually-hidden'>Catalog</h2>

            <div className='catalog__films-list'>
              <ItemList items={films}
                renderItem={(item: TFilm) => <FilmCard film={item} key={item.id} handleMouseOver={onMouseOver} />}
              />
            </div>
          </section>

          <footer className='page-footer'>
            <div className='logo'>
              <a href='main.html' className='logo__link logo__link--light'>
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
    </div>
  );
};

