import { render, screen } from '@testing-library/react';
import FavoriteEmpty from './favorites-empty';

describe('Component: Favorite Empty', () => {
  it('should render correct', () => {
    const favoritesEmptyTestId = 'favorites-empty';

    render(<FavoriteEmpty />);

    const favoritesEmpty = screen.getByTestId(favoritesEmptyTestId);
    expect(favoritesEmpty).toBeInTheDocument();
  });
});
