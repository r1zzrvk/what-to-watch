import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { HistoryRouter } from '../history-router/history-router';
import { ReviewForm } from './review-form';

const history = createMemoryHistory();

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <HistoryRouter history={history}>
        <ReviewForm id={film.id} />
      </HistoryRouter>
    );

    expect(screen.getByText('AddReviewForm')).toBeInTheDocument();
  });
});
