import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchReviews } from '../../../../store/api-actions/review-actions/review';
import { getReviews } from '../../../../store/selectors/review';
import { TReview } from '../../../../types/film';
import { ItemList } from '../../../item-list/item-list';
import { ReviewCard } from '../../../review-card/review-card';

export const ReviewsTab = () => {
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchReviews(params.id));
  }, [params.id, dispatch]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.length > 0
            ? <ItemList items={reviews} renderItem={(item: TReview) => (<ReviewCard review={item} key={item.id} />)}/>
            : <blockquote className="review__quote"><strong className="review__text">No reviews found</strong></blockquote>
        }
      </div>
    </div>
  );
};
