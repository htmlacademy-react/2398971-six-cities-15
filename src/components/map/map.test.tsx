import { render, screen } from '@testing-library/react';
import { CITIES } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffers, makeFakeStore } from '../../utils/mocks';
import Map from './map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const mapTestId = 'map-test';

    const withHistoryComponent = withHistory(
      <Map
        city={CITIES[0]}
        offers={makeFakeOffers}
        activeOffer={null}
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const map = screen.getByTestId(mapTestId);

    expect(map).toBeInTheDocument();
  });
});
