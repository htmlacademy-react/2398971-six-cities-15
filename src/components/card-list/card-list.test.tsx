import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffers, makeFakeStore } from '../../utils/mocks';
import CardList from './card-list';

describe('Component: Card List', () => {
  it('should render correctly', () => {
    const citiesPlacesListTestId = 'cities-places-list';

    const withHistoryComponent = withHistory(
      <CardList
        offers={makeFakeOffers}
        handleOfferChange={()=> {}}
        cardClassName='class text'
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const citiesPlacesList = screen.getByTestId(citiesPlacesListTestId);

    expect(citiesPlacesList).toBeInTheDocument();
  });
});
