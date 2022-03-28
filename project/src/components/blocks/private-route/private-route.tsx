import { Navigate } from 'react-router-dom';
import {AuthorizationStatus} from '../../../const';

type PrivateRouteProps = {
  children: JSX.Element,
  authorizationStatus: AuthorizationStatus
}

function PrivateRoute(props:PrivateRouteProps):JSX.Element {
  const {children, authorizationStatus} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
}


export default PrivateRoute;
