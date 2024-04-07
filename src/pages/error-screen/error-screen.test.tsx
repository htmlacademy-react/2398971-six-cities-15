import { render, screen } from '@testing-library/react';
import ErrorScreen from './error-screen';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    const pageErrorTestId = 'page-error';
    const expectedText = 'Sorry, something went wrong. 404. Page not found';

    const withHistoryComponent = withHistory(<ErrorScreen/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const pageError = screen.getByTestId(pageErrorTestId);

    expect(pageError).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
