import { createSlice } from '@reduxjs/toolkit';
import { TReviewState } from '../../../types/state';
import { fetchReviews } from '../../api-actions/review-actions/review';

const initialState: TReviewState = {
  isLoading: false,
  reviews: [],
};

export const reviewReducer = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      });
  }
});
