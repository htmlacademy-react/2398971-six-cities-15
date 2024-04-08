import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import OfferBookmark from './offer-bookmark';

describe('Component: Offer Bookmark', () => {
  it('should render correctly', () => {
    const bookmarkButtonTestId = 'bookmark-button';

    const withHistoryComponent = withHistory(
      <OfferBookmark
        offerId={makeFakeOffer().id}
        isFavorite={Boolean(true)}
        className='class text'
        width={5}
        height={10}
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const bookmarkButton = screen.getByTestId(bookmarkButtonTestId);

    expect(bookmarkButton).toBeInTheDocument();
  });
});
