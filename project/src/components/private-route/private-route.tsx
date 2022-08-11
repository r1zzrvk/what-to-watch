import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/auth';

import { useAppSelector } from '../../hooks/redux-hooks';

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authorizationStatus } = useAppSelector((state) => state.app);
  return (
    authorizationStatus === AuthorizationStatus.AUTH ? children : <Navigate to='/login' />
  );
};
