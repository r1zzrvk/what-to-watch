import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ExitButton } from '../../components/player-controls/exit-button/exit-button';
import { FullscreenButton } from '../../components/player-controls/fullscreen-button/fullscreen-button';
import { PlayButton } from '../../components/player-controls/play-button/play-button';
import { ProgressBar } from '../../components/player-controls/progress-bar/progress-bar';
import { Videoplayer } from '../../components/videoplayer/videoplayer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchFilm } from '../../store/api-actions/film-actions/film';
import { getFilm, getFilms } from '../../store/selectors/film';
import { existingId } from '../../utils/common';

export const PlayerPage = () => {
  const film = useAppSelector(getFilm);
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const isIdExist = existingId(films,Number(params.id));

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  useEffect(() => {
    dispatch(fetchFilm(params.id));

    if (!isIdExist) {
      return navigate('/*');
    }

  }, [params.id, dispatch, isIdExist, navigate]);

  if (!film) {
    return null;
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
          <ProgressBar progress={progress} videoRef={videoRef} />
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
