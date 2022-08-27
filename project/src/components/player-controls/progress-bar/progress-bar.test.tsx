import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from './progress-bar';

describe('Component: ProgressBar', () => {
  it('should render correctly', () => {
    const videoRef = React.createRef<HTMLVideoElement>();
    render(
      <ProgressBar videoRef={videoRef} progress={0}/>
    );

    expect(screen.getByTestId('ProgressBar')).toBeInTheDocument();
  });
});
