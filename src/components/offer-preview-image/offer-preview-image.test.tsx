import { render, screen } from '@testing-library/react';
import faker from 'faker';
import OfferPreviewImage from './offer-preview-image';

describe('Component: Offer Preview Image', () => {
  it('should render correct', () => {
    const expectedPreviewImage = faker.image.imageUrl();
    const expectedWidth = 5;
    const expectedHeight = 10;

    const placeCardImageTestId = 'place-card-image';

    render(
      <OfferPreviewImage
        previewImage={expectedPreviewImage}
        width={expectedWidth}
        height={expectedHeight}
      />
    );

    const placeCardImage = screen.getByTestId(placeCardImageTestId);
    expect(placeCardImage).toBeInTheDocument();
  });
});
