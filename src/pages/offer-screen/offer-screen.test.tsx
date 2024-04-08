import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeComments, makeFakeCurrentOffer, makeFakeNearOffers, makeFakeStore } from '../../utils/mocks';
import OfferScreen from './offer-screen';
import { NameSpace } from '../../const';

describe('Component: OfferScreen', () => {
  it('should render correctly', () => {
    const pageOfferTestId = 'page-offer';

    const withHistoryComponent = withHistory(<OfferScreen authorizationStatus={'AUTH'}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.Offer]: {
        offer: makeFakeCurrentOffer(),
        nearOffers: makeFakeNearOffers,
        isOfferDataLoading: [false, false],
        hasErrorOfferLoading: false,
        hasErrorNearOffersLoading: false,
      },
      [NameSpace.Comments]: {
        comments: makeFakeComments,
        isSendNewCommentDataLoading: false,
        isCommentsDataLoading: false,
        hasErrorCommentLoading: false,
        hasErrorCommentSending: false,
      },
    }));

    render(withStoreComponent);
    const pageOffer = screen.getByTestId(pageOfferTestId);

    expect(pageOffer).toBeInTheDocument();
  });
});
