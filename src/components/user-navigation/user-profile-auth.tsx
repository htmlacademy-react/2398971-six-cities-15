import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/favorite-process/selectors';

function UserProfileAuth(): JSX.Element {
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const favoriteOffersCount = useAppSelector(getFavoriteOffers).length;

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list" data-testid="header-user-auth">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className='user__avatar'
              src={userData?.avatarUrl}
              alt='User Avatar'
            />
          </div>
          <span className="header__user-name user__name">
            {userData && userData.email.charAt(0).toUpperCase() + userData.email.slice(1)}
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
