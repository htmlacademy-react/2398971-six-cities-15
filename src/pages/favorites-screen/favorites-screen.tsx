import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getErrorFavoriteOfferSendingStatus, getErrorFavoriteOffersLoadingStatus, getFavoriteOffers, getFavoriteOffersDataLoadingStatus } from '../../store/favorite-process/selectors';
import FavoritesCardList from '../../components/favorites-card-list/favorites-card-list';
import ErrorScreen from '../error-screen/error-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function FavoritesScreen (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect (() => {
    dispatch(fetchFavoriteOffersAction());
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
    <div className={`${favoriteOffers.length === 0 ? 'page page--favorites-empty' : 'page'}`} data-testid="page-favorites">
      <Helmet>
        <title>Шесть городов. Избранное.</title>
      </Helmet>
      <Header/>
      <main className={`${favoriteOffers.length === 0 ? 'page__main page__main--favorites page__main--favorites-empty' : 'page__main page__main--favorites'}`}>
        <div className="page__favorites-container container">
          <FavoritesCardList
            offers={favoriteOffers}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesScreen;
