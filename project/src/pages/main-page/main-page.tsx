import { useNavigate } from 'react-router-dom';
import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { Header } from '../../components/ui/header/header';
import { Footer } from '../../components/ui/footer/footer';
import { ListWithPagination } from '../../components/list-with-pagination/list-with-pagination';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilms } from '../../store/selectors/film';

export const MainPage = () => {
  const navigate = useNavigate();
  const films = useAppSelector(getFilms);
  return (
    <div>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel' />
        </div>
        <h1 className='visually-hidden'>WTW</h1>
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
          <GenreFilter films={films} />
          {films.length > 0 ? <ListWithPagination films={films}/> : <div>No movies found</div>}
        </section>
        <Footer />
      </div>
    </div>
  );
};
