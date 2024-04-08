import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import Locations from './locations';

describe('Component: Locations', () => {
  it('should render correctly', () => {
    const locationsTestId = 'locations';

    const withHistoryComponent = withHistory(<Locations/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const locations = screen.getByTestId(locationsTestId);

    expect(locations).toBeInTheDocument();
  });
});
