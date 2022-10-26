import { useCallback, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../constants/film';
import { useFiltredFilms } from '../../hooks/filter-films/filter-films';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getFilmLoading, getGenre } from '../../store/selectors/film';
import { TFilm } from '../../types/film';
import { FilmCard } from '../film-card/film-card';
import { ItemList } from '../item-list/item-list';
import { Paginator } from '../paginator/paginator';
import { Loader } from '../ui/loader/loader';

type TListWithPaginationProps = {
  films: TFilm[]
};

export const ListWithPagination = ({ films }: TListWithPaginationProps) => {
  const genre = useAppSelector(getGenre);
  const isLoading = useAppSelector(getFilmLoading);
  const [, setFilmId] = useState<number | null>(null);
  const filtredFilms = useFiltredFilms(genre, films);
  const [countOfVisibleItems, setCountOfVisibleItems] = useState(ITEMS_PER_PAGE);

  const handleMouseOver = (id: number) => {
    setFilmId(id);
  };

  const handleClick = useCallback(() => {
    setCountOfVisibleItems((prevValue) => prevValue + ITEMS_PER_PAGE);
  }, []);

  return (
    <>
      <div className='catalog__films-list'>
        {isLoading
          ? <Loader />
          : <ItemList items={filtredFilms.slice(0, countOfVisibleItems)} renderItem={(item: TFilm) => (<FilmCard film={item} key={item.id} onMouseOver={handleMouseOver} />)} />}
      </div>
      {filtredFilms.length >= countOfVisibleItems ? <Paginator handleClick={handleClick} /> : null}
    </>
  );
};
