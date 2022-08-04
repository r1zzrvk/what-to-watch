import { useEffect, useRef } from 'react';

type TVideoplayer = {
  previewImage: string
  video: string
  isPlaying: boolean
}

export const Videoplayer = ({ video, previewImage, isPlaying }: TVideoplayer) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 1000);

      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isPlaying]);
  return (
    isPlaying
      ? <video src={video} poster={previewImage} ref={videoRef} muted loop width="280" height="175" />
      : <img src={previewImage} alt="poster" width="280" height="175" />
  );
};

