import { ChangeEvent } from 'react';

type TRatingStarProps = {
  rating: number
  onRatingChange: (value: number) => void
}

export const RatingStar = ({ rating, onRatingChange}: TRatingStarProps) => {
  const handleRatingChange = ({ target }: ChangeEvent<HTMLInputElement>) => onRatingChange(Number(target.value));
  return (
    <>
      <input className="rating__input" id={`star-${rating}`} type="radio" name='rating' value={rating} onChange={handleRatingChange} />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </>
  );
};
