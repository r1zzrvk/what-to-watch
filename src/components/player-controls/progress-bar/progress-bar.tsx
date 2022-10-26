import { RefObject } from 'react';
import { convertPlayerTime, playerTimeTemplate } from '../../../utils/common';

type TProgressBarProps = {
  progress: number
  videoRef: RefObject<HTMLVideoElement>
  isPlaying: boolean
}

export const ProgressBar = ({ progress, videoRef, isPlaying }: TProgressBarProps) => {
  const convertedTimeleft = convertPlayerTime(Number(videoRef.current?.duration) - Number(videoRef.current?.currentTime));

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100"></progress>
        <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
      </div>
      <div className="player__time-value">
        {isPlaying
          ? playerTimeTemplate(convertedTimeleft.hours, convertedTimeleft.minutes, convertedTimeleft.seconds)
          : '00:00:00'}
      </div>
    </div>
  );
};
