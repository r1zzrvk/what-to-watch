import { Link } from 'react-router-dom';

export const UserBlock = () => (
  <ul className='user-block'>
    <li className='user-block__item'>
      <div className='user-block__avatar'>
        <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
      </div>
    </li>
    <li className='user-block__item'>
      <Link to='/login' className='user-block__link'>Sign out</Link>
    </li>
  </ul>
);
