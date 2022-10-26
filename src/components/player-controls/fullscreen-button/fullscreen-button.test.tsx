import { render, screen } from '@testing-library/react';
import React from 'react';
import { FullscreenButton } from './fullscreen-button';

describe('Component: FullscreenButton', () => {
  it('should render correctly', () => {
    const videoRef = React.createRef<HTMLVideoElement>();
    render(
      <FullscreenButton videoRef={videoRef}/>
    );

    expect(screen.getByText('Full screen')).toBeInTheDocument();
  });
});
