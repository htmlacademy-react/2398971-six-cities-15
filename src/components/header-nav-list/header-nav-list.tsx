import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import UserProfileAuth from '../user-profile-auth/user-profile-auth';
import UserProfileNoAuth from '../user-profile-no-auth/user-profile-no-auth';

function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuth) {
    return (<UserProfileAuth/>);
  } else {
    return (<UserProfileNoAuth/>);
  }
}

export default HeaderNavList;
