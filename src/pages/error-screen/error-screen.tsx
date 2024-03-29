import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import HeaderNavList from '../../components/user-navigation/user-navigation-list';

function ErrorScreen (): JSX.Element {
  return (
    <div className="page page--error-empty">
      <Helmet>
        <title>Шесть городов. Страница не найдена.</title>
      </Helmet>
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
      <main className="page__main page__main--error page__main--error-empty">
        <div className="page__error-container container">
          <section className="error error--empty">
            <h1 className="visually-hidden">Error (empty)</h1>
            <div className="error__status-wrapper">
              <b className="error__status">Sorry, something went wrong.</b>
              <p className="error__status-description">
                A team of highly trained monkeys has been dispatched to deal with this situation.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default ErrorScreen;
