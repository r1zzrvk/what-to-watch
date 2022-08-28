
import { render } from '@testing-library/react';
import React from 'react';
import { Videoplayer } from './videoplayer';
import { makeFakeFilm } from '../../utils/mocks/mocks';

describe('Component: VideoElement', () => {
  const film = makeFakeFilm();

  const videoRef = React.createRef<HTMLVideoElement>();
  it('should render correctly', () => {
    render(
      <Videoplayer videoRef={videoRef} poster={film.posterImage} src={film.videoLink} onTimeUpdate={jest.fn()}/>
    );
  });
});
