import { RefObject } from 'react';

type TVideoplayer = {
  poster: string
  src: string
  videoRef: RefObject<HTMLVideoElement>
  onTimeUpdate: () => void
}

export const Videoplayer = ({ src, poster, videoRef, onTimeUpdate}: TVideoplayer) => (
  <video
    src={src}
    poster={poster}
    ref={videoRef}
    loop
    className='player__video'
    onTimeUpdate={onTimeUpdate}
  />);

