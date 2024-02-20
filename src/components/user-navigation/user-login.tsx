import {Link} from 'react-router-dom';

function UserLogin(): JSX.Element {
  return (
    <Link className="header__nav-link" to="/">
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default UserLogin;
