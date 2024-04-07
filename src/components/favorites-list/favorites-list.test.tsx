import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeFavoriteOffers, makeFakeStore } from '../../utils/mocks';
import FavoriteCardList from './favorites-list';

describe('Component: Favorite Card List', () => {
  it('should render correctly', () => {
    const favoritesTestId = 'favorites';

    const withHistoryComponent = withHistory(<FavoriteCardList offers={makeFakeFavoriteOffers}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const favorites = screen.getByTestId(favoritesTestId);

    expect(favorites).toBeInTheDocument();
  });
});
