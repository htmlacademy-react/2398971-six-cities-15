import { render, screen } from '@testing-library/react';
import OfferRating from './offer-rating';

describe('Component: Offer Rating', () => {
  it('should render correct', () => {
    const offerRatingTestId = 'offer-rating';

    render(
      <OfferRating
        className={'text'}
        rating={5}
      />);

    const offerRating = screen.getByTestId(offerRatingTestId);
    expect(offerRating).toBeInTheDocument();
  });
});
