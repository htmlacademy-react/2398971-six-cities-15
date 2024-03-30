import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getErrorFavoriteOfferSendingStatus, getErrorFavoriteOffersLoadingStatus, getFavoriteOffers, getFavoriteOffersDataLoadingStatus } from '../../store/favorite-process/selectors';
import { clearFavoriteOffers } from '../../store/favorite-process/favorite-process';
import FavoriteCardList from '../../components/favorites-list/favorites-list';
import ErrorScreen from '../error-screen/error-screen';
import LoadingScreen from '../loading-screen/loading-screen';

import Header from '../../components/header/header';

function FavoritesScreen (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect (() => {
    dispatch(fetchFavoriteOffersAction());

    return () => {
      dispatch(clearFavoriteOffers());
    };
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteOffersDataLoading = useAppSelector(getFavoriteOffersDataLoadingStatus);

  const hasErrorFavoriteOffersLoading = useAppSelector(getErrorFavoriteOffersLoadingStatus);
  const hasErrorFavoriteOffersSending = useAppSelector(getErrorFavoriteOfferSendingStatus);

  if (
    hasErrorFavoriteOffersLoading ||
    hasErrorFavoriteOffersSending) {
    return (
      <ErrorScreen />
    );
  }

  if (favoriteOffers === null || isFavoriteOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Избранное.</title>
      </Helmet>
      <Header/>
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
