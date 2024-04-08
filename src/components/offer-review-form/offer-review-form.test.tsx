import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import OfferReviewForm from './offer-review-form';

describe('Component: OfferReviewForm', () => {
  it('should render correctly', () => {
    const reviewsFormTestId = 'reviews-form';

    const withHistoryComponent = withHistory(<OfferReviewForm/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const reviewsForm = screen.getByTestId(reviewsFormTestId);

    expect(reviewsForm).toBeInTheDocument();
  });
});
