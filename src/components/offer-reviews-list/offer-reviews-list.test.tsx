import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeComments, makeFakeStore } from '../../utils/mocks';
import OfferReviewsList from './offer-reviews-list';

describe('Component: OfferReviewsList', () => {
  it('should render correctly', () => {
    const reviewsListTestId = 'reviews-list';

    const withHistoryComponent = withHistory(<OfferReviewsList comments={makeFakeComments}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const reviewsList = screen.getByTestId(reviewsListTestId);

    expect(reviewsList).toBeInTheDocument();
  });
});
