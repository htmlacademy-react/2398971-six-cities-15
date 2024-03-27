import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import FavoriteCardList from '../../components/favorites-list/favorites-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderNavList from '../../components/user-navigation/user-navigation-list';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { clearFavoriteOffers } from '../../store/action';
import ErrorScreen from '../error-screen/error-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen (): JSX.Element {
  const dispatch = useAppDispatch();


  useEffect (() => {
    dispatch(fetchFavoriteOffersAction());

    return () => {
      dispatch(clearFavoriteOffers(null));
    };
  }, [dispatch]);

  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const isError = useAppSelector((state) => state.errorStatus);

  if (isError) {
    return (
      <ErrorScreen />
    );
  }

  if (favoriteOffers === null) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Избранное.</title>
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoriteCardList
            offers={favoriteOffers}
          />
        </div>
      </main>
      <footer className="footer container">
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

export default FavoritesScreen;
