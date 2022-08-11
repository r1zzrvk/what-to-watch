import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { changeFilters } from '../../store/film-reducer';
import { TFilm } from '../../types/film';
import { generateGenres } from '../../utils/genres';

type TGenreFilterProps = {
  films: TFilm[]
}

export const GenreFilter = ({ films }: TGenreFilterProps) => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.film.genre);
  const genres = generateGenres(films);
  const handleClick = (genre: string) => {
    dispatch(changeFilters(genre));
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
        >
          <NavLink
            to=''
            className='catalog__genres-link'
            onClick={() => handleClick(genre)}
          >{genre}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
