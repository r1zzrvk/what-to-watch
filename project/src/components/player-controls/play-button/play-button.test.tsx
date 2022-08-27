import { render, screen } from '@testing-library/react';
import React from 'react';
import { PlayButton } from './play-button';

describe('Component: PlayButton', () => {
  it('should render correctly', () => {
    const videoRef = React.createRef<HTMLVideoElement>();
    render(
      <PlayButton videoRef={videoRef} isPlaying setIsPlaying={jest.fn()}/>
    );

    expect(screen.getByTestId('PlayButton')).toBeInTheDocument();
  });
});
