import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import UserProfileNoAuth from './user-profile-no-auth';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const headerUserNoAuthTestId = 'header-user-no-auth';

    const preparedComponent = withHistory(<UserProfileNoAuth />);
    render(preparedComponent);
    const headerUserNoAuth = screen.getByTestId(headerUserNoAuthTestId);

    expect(headerUserNoAuth).toBeInTheDocument();
  });
});
