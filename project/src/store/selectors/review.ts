import { createSelector } from 'reselect';
import { RootState } from '..';

const getReviewState = (state: RootState) => state.review;

export const getReviews = createSelector(getReviewState, (state) => state.reviews);

export const getReviewsLoading = createSelector(getReviewState, (state) => state.isLoading);
