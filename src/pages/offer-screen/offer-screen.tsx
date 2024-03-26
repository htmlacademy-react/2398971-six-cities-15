import { useEffect, useState } from 'react';
import { Nullable } from 'vitest';
import { Helmet } from 'react-helmet-async';
import { OfferList } from '../../types/offer';
import Logo from '../../components/logo/logo';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderNavList from '../../components/user-navigation/user-navigation-list';
import { useParams } from 'react-router-dom';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchOfferCommentAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { clearComments, clearNearOffer, clearOffer } from '../../store/action';
import ErrorScreen from '../error-screen/error-screen';

type OfferScreenProps = {
  authorizationStatus: string;
}

function OfferScreen (props: OfferScreenProps): JSX.Element {
  const {authorizationStatus} = props;
  const dispatch = useAppDispatch();
  const {offerId} = useParams();

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferList>>(null);

  const handleOfferChange = (offer?: OfferList) => {
    setActiveOffer(offer || null);
  };//const currentNearOffer = сurrentOffers.find(({ id }) => id === activeOffer?.id);


  useEffect (() => {
    if (offerId) {
      dispatch(fetchCurrentOfferAction(offerId));
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchOfferCommentAction(offerId));
    }

    return () => {
      dispatch(clearOffer(null));
      dispatch(clearNearOffer(null));
      dispatch(clearComments(null));
    };
  }, [dispatch, offerId]);

  const сurrentOffer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const comments = useAppSelector((state) => state.comments);
  const isError = useAppSelector((state) => state.errorStatus);

  if (isError) {
    return (
      <ErrorScreen />
    );
  }

  if (сurrentOffer === null || nearOffers === null || comments === null) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Предложения.</title>
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
      <main className="page__main page__main--offer">
        <Offer
          authorizationStatus={authorizationStatus}
          activeOffer={activeOffer}
          сurrentOffer={сurrentOffer}
          nearOffers={nearOffers}
          comments={comments}
        />
        <NearPlaces
          handleOfferChange={handleOfferChange}
          nearOffers={nearOffers}
          cardClassName="near-places"
        />
      </main>
    </div>
  );
}

export default OfferScreen;
