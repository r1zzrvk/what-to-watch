import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../utils/mocks/mocks';
import { ReviewCard } from './review-card';

describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    const review = makeFakeReview();
    render(
      <ReviewCard review={review}/>
    );

    expect(screen.getByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(review.rating)).toBeInTheDocument();
  });
});
