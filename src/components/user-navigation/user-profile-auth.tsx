import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function UserProfileAuth(): JSX.Element {
  const userEmail = useAppSelector((state) => state.email);

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
          {userEmail}
        </span>
        <span className="header__favorite-count">
          3
        </span>
      </Link>
    </li>
  );
}

export default UserProfileAuth;
