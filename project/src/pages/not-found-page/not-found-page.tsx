import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={handleClick}>Назад!</button>
    </div>
  );
};
