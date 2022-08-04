import { NavLink } from 'react-router-dom';
import { GENRES } from '../../constants/filter';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { changeFilters } from '../../store/film-reducer';

type TGenre = {
  title: string
}

export const GenreFilter = () => {
  const dispatch = useAppDispatch();

  const handleClick = ({ title }: TGenre): void => {
    dispatch(changeFilters(title));
  };

  return (
    <ul className='catalog__genres-list'>
      {GENRES.map((genre: TGenre, i) => (
        <li
          key={genre.title}
          className='catalog__genres-item'
        >
          <NavLink
            to=''
            className='catalog__genres-link'
            onClick={() => handleClick(genre)}
          >{genre.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
