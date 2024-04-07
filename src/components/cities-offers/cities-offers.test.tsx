import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffers, makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import CitiesOffers from './cities-offers';
import { CITIES } from '../../const';

describe('Component: Card List', () => {
  it('should render correctly', () => {
    const citiesTestId = 'cities';

    const withHistoryComponent = withHistory(
      <CitiesOffers
        currentCity={CITIES[0]}
        currentOffers={makeFakeOffers}
        sortedOffers={makeFakeOffers}
        activeOffer={makeFakeOffer()}
        handleOfferChange={()=> {}}
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const cities = screen.getByTestId(citiesTestId);

    expect(cities).toBeInTheDocument();
  });
});
