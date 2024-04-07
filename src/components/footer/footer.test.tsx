import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const footerLogoTestId = 'footer-logo-test';

    const preparedComponent = withHistory(<Footer />);
    render(preparedComponent);
    const footerLogo = screen.getByTestId(footerLogoTestId);

    expect(footerLogo).toBeInTheDocument();
  });
});
