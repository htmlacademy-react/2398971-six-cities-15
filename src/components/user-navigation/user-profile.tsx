import {Link} from 'react-router-dom';

function UserProfile(): JSX.Element {
  return (
    <Link
      className="header__nav-link header__nav-link--profile"
      to="/"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">
        Oliver.conner@gmail.com
      </span>
      <span className="header__favorite-count">0</span>
    </Link>
  );
}

export default UserProfile;
