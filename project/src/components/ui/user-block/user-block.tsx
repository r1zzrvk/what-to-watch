import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../../constants/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { logOut } from '../../../store/api-actions';

export const UserBlock = () => {
  const { authorizationStatus } = useAppSelector((state) => state.app);
  return (
    authorizationStatus === AuthorizationStatus.AUTH ? <AuthUser /> : <NoAuthUser />
  );
};

const AuthUser = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.app);
  const handleLogoutClick = () => {
    dispatch(logOut());
  };
  return (
    <ul className='user-block'>
      <li className='user-block__item'>
        <div className='user-block__avatar'>
          <img src={userData?.avatarUrl} alt='User avatar' width='63' height='63' />
        </div>
      </li>
      <li className='user-block__item'>
        <Link to='' className='user-block__link' onClick={handleLogoutClick}>
          Sign out
        </Link>
      </li>
    </ul>
  );
};

const NoAuthUser = () => (
  <div className="user-block">
    <Link to='/login' className="user-block__link">Sign in</Link>
  </div>
);
