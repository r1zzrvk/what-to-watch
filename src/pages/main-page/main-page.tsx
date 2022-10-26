import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { Footer } from '../../components/ui/footer/footer';
import { ListWithPagination } from '../../components/list-with-pagination/list-with-pagination';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilms } from '../../store/selectors/film';
import { PromoFilm } from '../../components/promo-film/promo-film';

export const MainPage = () => {
  const films = useAppSelector(getFilms);
  return (
    <div>
      <PromoFilm />
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <GenreFilter films={films} />
          {films.length > 0 ? <ListWithPagination films={films} /> : <div>No movies found</div>}
        </section>
        <Footer />
      </div>
    </div>
  );
};
