import { reviewReducer } from './review-reducer';

describe('Reducer: Review', () => {
  const state = {
    isLoading: false,
    reviews: [],
  };

  it('without additional parameters should return initial state', () => {
    expect(reviewReducer.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });
});
