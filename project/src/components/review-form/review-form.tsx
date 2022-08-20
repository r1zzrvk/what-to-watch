import { ChangeEvent, FormEvent, useState } from 'react';
import { RATING } from '../../constants/film';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useValidateForm } from '../../hooks/validate-form';
import { addReview } from '../../store/api-actions/review';
import { ItemList } from '../item-list/item-list';
import { RatingStar } from '../rating-star/rating-star';

type TReviewFormProps = {
  id: number | undefined
}

export const ReviewForm = ({ id }: TReviewFormProps) => {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const isValid = useValidateForm(comment);
  const isDisabled = rating === 0 || !isValid;


  const onReviewInputChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(addReview(({ rating, comment, id })));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-review__htmlForm">
      <div className="rating">
        <div className="rating__stars">
          <ItemList items={RATING} renderItem={(item: number) =>
            (<RatingStar rating={item} key={item} onRatingChange={setRating} />)}
          />
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onReviewInputChange} value={comment}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type='submit' disabled={isDisabled}>Post</button>
        </div>
      </div>
    </form>
  );
};
