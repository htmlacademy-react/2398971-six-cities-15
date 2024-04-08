import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeFavoriteOffers, makeFakeStore } from '../../utils/mocks';
import FavoritesCardList from './favorites-card-list';

describe('Component: Favorite Card List', () => {
  it('should render correctly', () => {
    const favoritesTestId = 'favorites';

    const withHistoryComponent = withHistory(<FavoritesCardList offers={makeFakeFavoriteOffers}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const favorites = screen.getByTestId(favoritesTestId);

    expect(favorites).toBeInTheDocument();
  });
});
