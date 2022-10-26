import { useNavigate } from 'react-router-dom';

export const ExitButton = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    navigate(-1);
  };

  return (
    <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>
  );
};
