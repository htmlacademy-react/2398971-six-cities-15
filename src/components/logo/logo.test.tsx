import Logo from './logo';
import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const headerLogoTestId = 'header-logo-test';

    const preparedComponent = withHistory(<Logo />);
    render(preparedComponent);
    const headerLogo = screen.getByTestId(headerLogoTestId);

    expect(headerLogo).toBeInTheDocument();
  });
});
