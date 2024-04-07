import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import FavoritesScreen from './favorites-screen';

describe('Component: FavoritesScreen', () => {
  it('should render correctly', () => {
    const pageFavoritesTestId = 'page-favorites';

    const withHistoryComponent = withHistory(<FavoritesScreen/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const pageFavorites = screen.getByTestId(pageFavoritesTestId);

    expect(pageFavorites).toBeInTheDocument();
  });
});
