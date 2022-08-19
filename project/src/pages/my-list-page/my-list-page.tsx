import { useState } from 'react';
import { FilmCard } from '../../components/film-card/film-card';
import { ItemList } from '../../components/item-list/item-list';
import { Footer } from '../../components/ui/footer/footer';
import { Logo } from '../../components/ui/logo/logo';
import { UserBlock } from '../../components/ui/user-block/user-block';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilms } from '../../store/selectors/film';
import { TFilm } from '../../types/film';

export const MyListPage = () => {
  const [filmId, setFilmId] = useState<number | null>(null);
  const films = useAppSelector(getFilms);
  const handleMouseOver = (id: number) => {
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
                renderItem={(item: TFilm) => <FilmCard film={item} key={item.id} onMouseOver={handleMouseOver} />}
              />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

