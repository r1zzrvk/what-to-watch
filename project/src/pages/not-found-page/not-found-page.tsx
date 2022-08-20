import { useNavigate } from 'react-router-dom';
import './not-found-page.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='wrapper'>
      <div className='content'>
        <h1>404</h1>
        <h2>Oops, something went wrong</h2>
        <p>You may want to head back to the homepage.</p>
        <button className='button' onClick={handleClick}>RETURN HOME</button>
      </div>
    </div>
  );
};
