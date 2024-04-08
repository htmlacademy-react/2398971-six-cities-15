import { render, screen } from '@testing-library/react';
import OfferFeatures from './offer-features';

describe('Component: Offer Features', () => {
  it('should render correct', () => {
    const expectedType = 'type text';
    const expectedBedrooms = 3;
    const expectedMaxAdults = 5;

    const offerFeaturesTestId = 'offer-features';
    const offerEntireTestId = 'offer-entire';
    const offerBedroomsTestId = 'offer-bedrooms';
    const offerAdultsTestId = 'offer-adults';

    render(
      <OfferFeatures
        type = {expectedType}
        bedrooms= {expectedBedrooms}
        maxAdults= {expectedMaxAdults}
      />
    );
    const offerFeatures = screen.getByTestId(offerFeaturesTestId);
    const offerEntire = screen.getByTestId(offerEntireTestId);
    const offerBedrooms = screen.getByTestId(offerBedroomsTestId);
    const offerAdults = screen.getByTestId(offerAdultsTestId);

    expect(offerFeatures).toBeInTheDocument();
    expect(offerEntire.textContent).toBe(expectedType);
    expect(offerBedrooms.textContent).toBe(`${expectedBedrooms} Bedrooms`);
    expect(offerAdults.textContent).toBe(`Max ${expectedMaxAdults} adults`);
  });
});
