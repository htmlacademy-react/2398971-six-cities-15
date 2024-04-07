import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import PlacesSorting from './places-sorting';

describe('Component: PlacesSorting', () => {
  it('should render correctly', () => {
    const placesSortingTestId = 'places-sorting';

    const withHistoryComponent = withHistory(<PlacesSorting/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const placesSorting = screen.getByTestId(placesSortingTestId);

    expect(placesSorting).toBeInTheDocument();
  });
});
