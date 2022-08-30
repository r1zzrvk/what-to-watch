import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExitButton } from '../../components/player-controls/exit-button/exit-button';
import { FullscreenButton } from '../../components/player-controls/fullscreen-button/fullscreen-button';
import { PlayButton } from '../../components/player-controls/play-button/play-button';
import { ProgressBar } from '../../components/player-controls/progress-bar/progress-bar';
import { Loader } from '../../components/ui/loader/loader';
import { Videoplayer } from '../../components/videoplayer/videoplayer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchFilm } from '../../store/api-actions/film-actions/film';
import { getFilm, getFilmLoading } from '../../store/selectors/film';


export const PlayerPage = () => {
  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getFilmLoading);
  const dispatch = useAppDispatch();
  const params = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);


  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  useEffect(() => {
    dispatch(fetchFilm(params.id));
  }, [params.id, dispatch]);

  if (!film) {
    return null;
  }

  if(isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="player">
        <Videoplayer
          src={film.videoLink}
          poster={film.previewImage}
          videoRef={videoRef}
          onTimeUpdate={handleTimeUpdate}
        />
        <ExitButton />
        <div className="player__controls">
          <ProgressBar progress={progress} videoRef={videoRef} isPlaying={isPlaying}/>
          <div className="player__controls-row">
            <PlayButton videoRef={videoRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <div className="player__name">{film.name}</div>
            <FullscreenButton videoRef={videoRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
