import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Header from './header';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const headerTestId = 'header';

    const withHistoryComponent = withHistory(<Header/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const header = screen.getByTestId(headerTestId);

    expect(header).toBeInTheDocument();
  });
});
