import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/auth';
import { useAppSelector } from '../../hooks/redux-hooks';
import { getAuthorizationStatus } from '../../store/selectors/app';

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.AUTH ? children : <Navigate to='/login' />
  );
};
