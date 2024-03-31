import Logo from '../logo/logo';
import HeaderNavList from '../user-navigation/user-navigation-list';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <HeaderNavList/>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
