import Logo from '../logo/logo';
import HeaderNavList from '../header-nav-list/header-nav-list';

function Header(): JSX.Element {
  return (
    <header className="header" data-testid="header">
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
