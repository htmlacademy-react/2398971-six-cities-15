import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchOfferCommentAction } from '../../store/api-actions';
import { getCurrentOffer, getErrorNearOffersLoadingStatus, getErrorOfferLoadingStatus, getNearOffers, getOfferDataLoadingStatus } from '../../store/offer-process/selectors';
import { clearOffer } from '../../store/offer-process/offer-process';
import { getComments, getCommentsDataLoadingStatus, getErrorCommentLoadingStatus, getErrorCommentSendingStatus } from '../../store/comments-process/selectors';
import { clearComments } from '../../store/comments-process/comments-process';
import { getOffers } from '../../store/offers-process/selectors';
import Header from '../../components/header/header';
import Offer from '../../components/offer/offer';
import NearPlaces from '../../components/near-places/near-places';
import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';
import { getErrorFavoriteOfferSendingStatus } from '../../store/favorite-process/selectors';

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

  const currentOffer = useAppSelector(getCurrentOffer);
  const activeOffer = useAppSelector(getOffers).find((offer) => offer.id === offerId);
  const nearOffers = useAppSelector(getNearOffers).slice(0, 3);
  const mapNearOffers = useAppSelector(getNearOffers).slice(0, 3);
  const comments = useAppSelector(getComments);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const isCommentsDataLoading = useAppSelector(getCommentsDataLoadingStatus);

  if (activeOffer) {
    mapNearOffers.push(activeOffer);
  }

  const hasErrorOfferLoading = useAppSelector(getErrorOfferLoadingStatus);
  const hasErrorNearOffersLoading = useAppSelector(getErrorNearOffersLoadingStatus);
  const hasErrorCommentLoading = useAppSelector(getErrorCommentLoadingStatus);
  const hasErrorCommentSending = useAppSelector(getErrorCommentSendingStatus);
  const hasErrorFavoriteOfferSending = useAppSelector(getErrorFavoriteOfferSendingStatus);

  if (
    hasErrorOfferLoading ||
    hasErrorNearOffersLoading ||
    hasErrorCommentLoading ||
    hasErrorCommentSending ||
    hasErrorFavoriteOfferSending) {
    return (
      <ErrorScreen />
    );
  }

  if (currentOffer === null || activeOffer === null || nearOffers === null || comments === null || isOfferDataLoading.includes(true) || isCommentsDataLoading === true) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Предложения.</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <Offer
          authorizationStatus={authorizationStatus}
          activeOffer={activeOffer}
          currentOffer={currentOffer}
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
