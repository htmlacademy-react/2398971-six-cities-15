import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import UserLogout from './user-login';
import UserProfileAuth from './user-profile-auth';
import UserProfileNoAuth from './user-profile-no-auth';


function HeaderNavList(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.Auth ? <UserProfileAuth/> : <UserProfileNoAuth/>}
      {authorizationStatus === AuthorizationStatus.Auth ? <UserLogout/> : ''}
    </ul>
  );
}

export default HeaderNavList;
