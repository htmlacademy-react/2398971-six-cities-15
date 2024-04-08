import { render, screen } from '@testing-library/react';
import OfferGallery from './offer-gallery';
import faker from 'faker';

describe('Component: Offer Gallery', () => {
  it('should render correct', () => {
    const expectedImages = [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()];

    const galleryContainerTestId = 'gallery-container';
    const offerImageTestId = 'offer-image';

    render(<OfferGallery images = {expectedImages}/>);

    const offerFeatures = screen.getByTestId(galleryContainerTestId);
    const offerEntire = screen.getAllByTestId(offerImageTestId);

    expect(offerFeatures).toBeInTheDocument();
    expect(offerEntire.length).toBe(expectedImages.length);
  });
});
