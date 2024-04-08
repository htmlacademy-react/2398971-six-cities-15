import { render, screen } from '@testing-library/react';
import OfferDescription from './offer-description';

describe('Component: Offer Description', () => {
  it('should render correct', () => {
    const expectedDescription = (
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, ex a vulputate cursus, est mauris tincidunt tortor, ac consectetur purus orci ut est. Curabitur scelerisque sapien ac faucibus pellentesque.'
    );
    const expectedDescriptionCount = expectedDescription.split('.').length;
    const offerDescriptionTestId = 'offer-description';
    const offerTextTestId = 'offer-text';

    render(<OfferDescription description={expectedDescription} />);
    const offerDescription = screen.getByTestId(offerDescriptionTestId);
    const offerTextTest = screen.getAllByTestId(offerTextTestId);

    expect(offerDescription).toBeInTheDocument();
    expect(offerTextTest.length).toBe(expectedDescriptionCount);
  });
});
