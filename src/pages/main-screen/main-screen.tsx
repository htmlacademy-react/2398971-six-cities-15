import { useCallback, useState } from 'react';
import { Nullable } from 'vitest';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getCurrentCity, getCurrentOffers, getCurrentSorting, getOffersDataLoadingStatus } from '../../store/offers-process/selectors';
import { getErrorOfferLoadingStatus } from '../../store/offer-process/selectors';
import { getErrorFavoriteOfferSendingStatus } from '../../store/favorite-process/selectors';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import SortingSelector from '../../utils/sorting';
import ErrorScreen from '../error-screen/error-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import CitiesOffers from '../../components/cities-offers/cities-offers';
import CitiesOffersEmpty from '../../components/cities-offers-empty/cities-offers-empty';

function MainScreen (): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const currentOffers = useAppSelector(getCurrentOffers);
  const currentSorting = useAppSelector(getCurrentSorting);
  const sortedOffers = SortingSelector(currentSorting.name);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferList>>(null);

  const handleOfferChange = useCallback((offer?: OfferList) => {
    setActiveOffer(offer || null);
  }, []);

  const hasErrorOffersLoading = useAppSelector(getErrorOfferLoadingStatus);
  const hasErrorFavoriteOfferSending = useAppSelector(getErrorFavoriteOfferSendingStatus);
  const hasOffers = currentOffers.length !== 0;

  if (hasErrorOffersLoading || hasErrorFavoriteOfferSending) {
    return (
      <ErrorScreen />
    );
  }

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main" data-testid="page-main">
      <Helmet>
        <title>Шесть городов. Главная страница.</title>
      </Helmet>
      <Header/>
      <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        {!hasOffers &&
          <CitiesOffersEmpty
            currentCity={currentCity}
          />}
        {hasOffers &&
          <CitiesOffers
            currentCity={currentCity}
            currentOffers={currentOffers}
            sortedOffers={sortedOffers}
            activeOffer={activeOffer}
            handleOfferChange={handleOfferChange}
          />}
      </main>
    </div>
  );
}

export default MainScreen;
