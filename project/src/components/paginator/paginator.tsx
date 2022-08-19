import React from 'react';

type TPaginatorProps = {
  handleClick: () => void
}

const paginator = ({ handleClick }: TPaginatorProps) => (
  <div className='catalog__more'>
    <button className='catalog__button' onClick={handleClick}>Show more</button>
  </div>
);

export const Paginator = React.memo(paginator);
