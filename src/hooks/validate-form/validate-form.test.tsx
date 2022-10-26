import {renderHook} from '@testing-library/react';
import { makeFakeReview } from '../../utils/mocks/mocks';
import { useValidateForm } from './validate-form';

describe('Hook: useValidateForm', () => {
  it('should return array', () => {
    const review = makeFakeReview();

    const {result} = renderHook(() =>
      useValidateForm(review.comment)
    );
    expect(result.current).toBeTruthy();
  });
});
