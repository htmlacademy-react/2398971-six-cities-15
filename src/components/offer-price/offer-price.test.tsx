import { render, screen } from '@testing-library/react';
import OfferPrice from './offer-price';

describe('Component: Offer Price', () => {
  it('should render correct', () => {
    const offerPriceTestId = 'offer-price';

    render(
      <OfferPrice
        className={'text'}
        price={250}
      />);

    const offerPrice = screen.getByTestId(offerPriceTestId);
    expect(offerPrice).toBeInTheDocument();
  });
});
