import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeComments, makeFakeCurrentOffer, makeFakeNearOffers, makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import Offer from './offer';

describe('Component: Offers', () => {
  it('should render correctly', () => {
    const offerTestId = 'offer';
    const expectedText = 'Meet the host';

    const withHistoryComponent = withHistory(
      <Offer
        authorizationStatus={'AUTH'}
        currentOffer={makeFakeCurrentOffer()}
        nearOffers={makeFakeNearOffers}
        comments={makeFakeComments}
        activeOffer={makeFakeOffer()}
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const offer = screen.getByTestId(offerTestId);

    expect(offer).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
