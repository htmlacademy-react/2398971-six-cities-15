import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserLogout(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to={AppRoute.Main}
        onClick={handleLogoutClick}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default UserLogout;
