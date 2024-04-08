import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('Component: Favorite Empty', () => {
  it('should render correct', () => {
    const favoritesEmptyTestId = 'favorites-empty';

    render(<FavoritesEmpty />);

    const favoritesEmpty = screen.getByTestId(favoritesEmptyTestId);
    expect(favoritesEmpty).toBeInTheDocument();
  });
});
