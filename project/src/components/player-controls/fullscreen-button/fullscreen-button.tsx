import { RefObject } from 'react';

type TFullscreenButtonProps = {
  videoRef: RefObject<HTMLVideoElement>
}

export const FullscreenButton = ({ videoRef }: TFullscreenButtonProps) => {
  const handleFullscreenClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };
  return (
    <button type="button" className="player__full-screen" onClick={handleFullscreenClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
};
