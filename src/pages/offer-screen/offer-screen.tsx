import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';
import { useAppDispatch, useAppSelector } from '../../hooks';
import HeaderNavList from '../../components/user-navigation/user-navigation-list';
import { useParams } from 'react-router-dom';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchOfferCommentAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
//import ErrorScreen from '../error-screen/error-screen';
import { getCurrentOffer, getNearOffers, getOfferDataLoadingStatus } from '../../store/offer-process/selectors';
import { clearOffer } from '../../store/offer-process/offer-process';
import { getComments, getCommentsDataLoadingStatus } from '../../store/сomments-process/selectors';
import { clearComments } from '../../store/сomments-process/сomments-process';
import { getOffers } from '../../store/offers-process/selectors';

type OfferScreenProps = {
  authorizationStatus: string;
}

function OfferScreen (props: OfferScreenProps): JSX.Element {
  const {authorizationStatus} = props;
  const dispatch = useAppDispatch();
  const {offerId} = useParams();
  const handleOfferChange = () => {};

  useEffect (() => {
    if (offerId) {
      dispatch(fetchCurrentOfferAction(offerId));
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchOfferCommentAction(offerId));
    }

    return () => {
      dispatch(clearOffer());
      dispatch(clearComments());
    };
  }, [dispatch, offerId]);

  const сurrentOffer = useAppSelector(getCurrentOffer);
  const activeOffer = useAppSelector(getOffers).find((offer) => offer.id === offerId);
  const nearOffers = useAppSelector(getNearOffers).slice(0, 3);
  const mapNearOffers = useAppSelector(getNearOffers).slice(0, 3);
  const comments = useAppSelector(getComments);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const isCommentsDataLoading = useAppSelector(getCommentsDataLoadingStatus);

  if (activeOffer) {
    mapNearOffers.push(activeOffer);
  }

  //const isError = useAppSelector((state) => state.errorStatus);

  // if (isError) {
  //   return (
  //     <ErrorScreen />
  //   );
  // }

  if (сurrentOffer === null || activeOffer === null || nearOffers === null || comments === null || isOfferDataLoading.includes(true) || isCommentsDataLoading === true) {
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
          nearOffers={mapNearOffers}
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
