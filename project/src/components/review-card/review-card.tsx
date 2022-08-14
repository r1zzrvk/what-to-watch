import { TReview } from '../../types/film';
import { convertDateFormat } from '../../utils/common';

type TReviewCardProps = {
  review: TReview
}

export const ReviewCard = ({ review }: TReviewCardProps) => {
  const { rating, date, comment, user } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{convertDateFormat(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};
