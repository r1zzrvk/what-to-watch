import { useNavigate } from 'react-router-dom';
import { GenreFilter } from '../../components/genre-filter/genre-filter';
import { Header } from '../../components/ui/header/header';
import { TFilm } from '../../types/film';
import { Footer } from '../../components/ui/footer/footer';
import { ListWithPagination } from '../../components/list-with-pagination/list-with-pagination';

type TMainPageProps = {
  films: TFilm[]
};

export const MainPage = ({ films }: TMainPageProps) => {
  const { genre, isLoading } = useAppSelector((state) => state.film);
  const [, setFilmId] = useState<number | null>(null);

  const navigate = useNavigate();

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
          <ListWithPagination films={films}/>
        </section>
        <Footer />
      </div>
    </div>
  );
};
