import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeNearOffers, makeFakeStore } from '../../utils/mocks';
import NearPlaces from './near-places';

describe('Component: Near Places', () => {
  it('should render correctly', () => {
    const nearPlacesContainerTestId = 'near-places-container';
    const expectedText = 'Other places in the neighbourhood';

    const withHistoryComponent = withHistory(
      <NearPlaces
        nearOffers={makeFakeNearOffers}
        handleOfferChange={()=> {}}
        cardClassName='class text'
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const nearPlacesContainer = screen.getByTestId(nearPlacesContainerTestId);

    expect(nearPlacesContainer).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
