import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuth: boolean,
  children: JSX.Element
}

export const PrivateRoute = ({ isAuth, children }: PrivateRouteProps) => (
  isAuth === false ? children : <Navigate to='/login' />
);
