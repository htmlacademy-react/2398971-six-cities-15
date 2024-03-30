import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUserEmail } from '../../store/user-process/selectors';
import { getOffers } from '../../store/offers-process/selectors';

function UserProfileAuth(): JSX.Element {
  const userEmail = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const favoriteOffersCount = useAppSelector(getOffers).filter((offer) => offer.isFavorite === true).length;

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
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
            {favoriteOffersCount}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={handleLogoutClick}
        >
          <span className="header__signout">
            Sign out
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default UserProfileAuth;
