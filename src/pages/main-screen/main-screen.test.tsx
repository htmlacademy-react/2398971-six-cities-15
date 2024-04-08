import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import MainScreen from './main-screen';

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const pageMainTestId = 'page-main';

    const withHistoryComponent = withHistory(<MainScreen/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const pageMain = screen.getByTestId(pageMainTestId);

    expect(pageMain).toBeInTheDocument();
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });
});
