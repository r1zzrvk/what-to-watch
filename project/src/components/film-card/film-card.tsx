import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TFilm } from '../../types/film';

type TFilmCardProps = {
  film: TFilm,
  onMouseOver: (id: number) => void,
};

export const FilmCard = ({ film, onMouseOver }: TFilmCardProps) => {
  const { name, previewImage, id, previewVideoLink } = film;
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleClick = () => {
    navigate(`/films/${id}`);
  };

  const handleHover = () => {
    setIsPlaying(true);

    onMouseOver(id);
  };

  const handleHoverLeave = () => {
    setIsPlaying(false);
  };
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
  }, [isPlaying, videoRef]);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleHover}
      onClick={handleClick}
      onMouseLeave={handleHoverLeave}
    >
      <div className="small-film-card__image">
        {
          isPlaying
            ?
            <video
              src={previewVideoLink}
              ref={videoRef}
              poster={previewImage}
              loop
              className='player__video'
              muted
            />
            : <img src={previewImage} alt="poster" width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
};
