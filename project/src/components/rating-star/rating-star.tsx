import { ChangeEvent } from 'react';

type TRatingStarProps = {
  rating: number
  setRating: (value: number) => void
}

export const RatingStar = ({ rating, setRating}: TRatingStarProps) => {
  const onRatingChange = ({ target }: ChangeEvent<HTMLInputElement>) => setRating(Number(target.value));
  return (
    <>
      <input className="rating__input" id={`star-${rating}`} type="radio" name='rating' value={rating} onChange={onRatingChange} />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </>
  );
};
