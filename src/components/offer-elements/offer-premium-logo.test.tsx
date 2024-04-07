import { render, screen } from '@testing-library/react';
import OfferPremiumLogo from './offer-premium-logo';

describe('Component: Offer Premium Logo', () => {
  it('should render correct', () => {
    const expectedClassName = 'class-name';
    const expectedText = /Premium/i;

    render(<OfferPremiumLogo className={expectedClassName} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
