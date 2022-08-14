import { createSlice } from '@reduxjs/toolkit';
import { TReview } from '../../types/film';
import { fetchReviews } from '../actions/api-actions';

type TReviewState = {
  isLoading: boolean
  reviews: TReview[]
}

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
