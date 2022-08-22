import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../../constants/auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { logOut } from '../../../store/api-actions/app';
import { getAuthorizationStatus } from '../../../store/selectors/app';

export const UserBlock = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.AUTH ? <AuthUser /> : <NoAuthUser />
  );
};

const AuthUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userData } = useAppSelector((state) => state.app);

  const handleProfileClick = () => {
    navigate('/mylist');
  };

  const handleLogoutClick = () => {
    dispatch(logOut());
  };
  return (
    <ul className='user-block'>
      <li className='user-block__item'>
        <div className='user-block__avatar' onClick={handleProfileClick}>
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
