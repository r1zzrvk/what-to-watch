import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../utils/mocks/mocks';
import { RatingStar } from './rating-star';

describe('Component: FullscreenButton', () => {
  it('should render correctly', () => {
    const film = makeFakeFilm();
    render(
      <RatingStar rating={film.rating} onRatingChange={jest.fn()}/>
    );

    expect(screen.getByText('Rating')).toBeInTheDocument();
    expect(screen.getByText(film.rating)).toBeInTheDocument();
  });
});
