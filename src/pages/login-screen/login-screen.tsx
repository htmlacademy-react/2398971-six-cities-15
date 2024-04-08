import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { loginAction } from '../../store/api-actions';
import { AppRoute, CITIES } from '../../const';
import { cityChange } from '../../store/offers-process/offers-process';

function LoginScreen (): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {

      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const randomCity = CITIES[Math.floor((Math.random() * CITIES.length))];

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Шесть городов. Авторизация.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  data-testid="loginElement"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  data-testid="passwordElement"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                data-testId="locations-item-test"
                onClick={() => {
                  dispatch((cityChange(randomCity)));
                }}
                to={AppRoute.Main}
              >
                <span>
                  {randomCity.name}
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
