import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TFilm } from '../../types/film';
import { Videoplayer } from '../videoplayer/videoplayer';

type TFilmCardProps = {
  film: TFilm,
  handleMouseOver: (id: number) => void,
};

export const FilmCard = ({ film, handleMouseOver }: TFilmCardProps) => {
  const { name, previewImage, id, previewVideoLink } = film;
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/films/${id}`);
  };

  const handleHover = () => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    handleMouseOver(id);
  };

  const handleHoverLeave = () => {
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleHover}
      onClick={handleClick}
      onMouseLeave={handleHoverLeave}
    >
      <div className="small-film-card__image">
        <Videoplayer previewImage={previewImage} video={previewVideoLink} isPlaying={isPlaying} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
};
