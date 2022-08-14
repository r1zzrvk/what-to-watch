import { useState } from 'react';
import { PAGE_COUNT } from '../../constants/film';
import { useFiltredFilms } from '../../hooks/filter-films';
import { useAppSelector } from '../../hooks/redux-hooks';
import { TFilm } from '../../types/film';
import { FilmCard } from '../film-card/film-card';
import { ItemList } from '../item-list/item-list';
import { Paginator } from '../paginator/paginator';
import { Loader } from '../ui/loader/loader';

type TListWithPaginationProps = {
  films: TFilm[]
};

export const ListWithPagination = ({ films }: TListWithPaginationProps) => {
  const { genre, isLoading } = useAppSelector((state) => state.film);
  const [, setFilmId] = useState<number | null>(null);
  const filtredFilms = useFiltredFilms(genre, films);
  const [visible, setVisible] = useState(PAGE_COUNT);

  const handleMouseOver = (id: number) => {
    setFilmId(id);
  };

  const handleClick = () => {
    setVisible((prevValue) => prevValue + PAGE_COUNT);

  };

  return (
    <>
      <div className='catalog__films-list'>
        {isLoading
          ? <Loader />
          : <ItemList items={filtredFilms.slice(0, visible)} renderItem={(item: TFilm) => (<FilmCard film={item} key={item.id} onMouseOver={handleMouseOver} />)} />}
      </div>
      {filtredFilms.length >= visible ? <Paginator handleClick={handleClick} /> : null}
    </>
  );
};
