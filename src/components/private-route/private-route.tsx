import { PropsWithChildren, ReactNode } from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = PropsWithChildren & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): ReactNode {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
