import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import UserProfileAuth from './user-profile-auth';

describe('Component: UserProfileAuth', () => {
  it('should render correctly', () => {
    const headerUserAuthTestId = 'header-user-auth';

    const withHistoryComponent = withHistory(<UserProfileAuth/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const headerUserAuth = screen.getByTestId(headerUserAuthTestId);

    expect(headerUserAuth).toBeInTheDocument();
  });
});
