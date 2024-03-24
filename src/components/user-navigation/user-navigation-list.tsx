import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import UserProfileAuth from './user-profile-auth';
import UserProfileNoAuth from './user-profile-no-auth';

function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuth) {
    return (<UserProfileAuth/>);
  } else {
    return (<UserProfileNoAuth/>);
  }
}

export default HeaderNavList;
