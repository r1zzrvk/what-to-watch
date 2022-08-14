type TPaginatorProps = {
  handleClick: () => void
}

export const Paginator = ({ handleClick }: TPaginatorProps) => (
  <div className='catalog__more'>
    <button className='catalog__button' onClick={handleClick}>Show more</button>
  </div>
);

