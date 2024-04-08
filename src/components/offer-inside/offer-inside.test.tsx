import { render, screen } from '@testing-library/react';
import OfferInside from './offer-inside';

describe('Component: Offer Inside', () => {
  it('should render correct', () => {
    const expectedGoods = ['good1', 'good2', 'good3'];

    const offerInsideTestId = 'offer-inside';
    const offerInsideItemTestId = 'offer-inside-item';

    render(<OfferInside goods = {expectedGoods}/>);

    const offerInside = screen.getByTestId(offerInsideTestId);
    const offerInsideItem = screen.getAllByTestId(offerInsideItemTestId);

    expect(offerInside).toBeInTheDocument();
    expect(offerInsideItem.length).toBe(expectedGoods.length);
  });
});
