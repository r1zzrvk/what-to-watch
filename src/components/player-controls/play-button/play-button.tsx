import { RefObject, useEffect } from 'react';

type TPlayButtonProps = {
  videoRef: RefObject<HTMLVideoElement>
  setIsPlaying: (value: boolean) => void
  isPlaying: boolean
}

export const PlayButton = ({ videoRef, setIsPlaying, isPlaying}: TPlayButtonProps) => {
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, videoRef]);

  return (
    <button type="button" className="player__play" onClick={handlePlayClick}>
      {isPlaying
        ?
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
        :
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>}
    </button>
  );
};

