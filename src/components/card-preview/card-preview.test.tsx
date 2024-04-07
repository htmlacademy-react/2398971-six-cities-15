import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import CardPreview from './card-preview';


describe('Component: Card Preview', () => {
  it('should render correctly', () => {
    const placeCardTestId = 'place-card';

    const withHistoryComponent = withHistory(
      <CardPreview
        offer={makeFakeOffer()}
        handleMouseHover={()=> {}}
        cardClassName='class text'
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const placeCard = screen.getByTestId(placeCardTestId);

    expect(placeCard).toBeInTheDocument();
  });
});
