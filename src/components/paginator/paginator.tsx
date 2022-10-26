import React from 'react';

type TPaginatorProps = {
  handleClick: () => void
}

const Paginator = ({ handleClick }: TPaginatorProps) => (
  <div className='catalog__more'>
    <button className='catalog__button' onClick={handleClick}>Show more</button>
  </div>
);

const memoizedPaginator = React.memo(Paginator);

export { memoizedPaginator as Paginator};

