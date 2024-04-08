import { render, screen } from '@testing-library/react';
import OfferUser from './offer-user';
import faker from 'faker';

describe('Component: Offer User', () => {
  it('should render correct', () => {
    const offerUserTestId = 'offer-user';

    render(
      <OfferUser
        className={'text'}
        width={5}
        height={10}
        user={{
          isPro: true,
          name:'name',
          avatarUrl: faker.image.imageUrl()
        }}
      />
    );

    const offerUser = screen.getByTestId(offerUserTestId);
    expect(offerUser).toBeInTheDocument();
  });
});
