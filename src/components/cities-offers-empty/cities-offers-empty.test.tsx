import { render, screen } from '@testing-library/react';
import CitiesOffersEmpty from './cities-offers-empty';
import { CITIES } from '../../const';

describe('Component: Cities Offers Empty', () => {
  it('should render correct', () => {
    const expectedCity = CITIES[0];
    const citiesСontainerTestId = 'cities-container';
    const citiesСurrentСityTestId = 'cities-current-сity';

    render(<CitiesOffersEmpty currentCity = {expectedCity} />);
    const citiesСontainer = screen.getByTestId(citiesСontainerTestId);
    const citiesСurrentСity = screen.getByTestId(citiesСurrentСityTestId);

    expect(citiesСontainer).toBeInTheDocument();
    expect(citiesСurrentСity.textContent).toBe(`We could not find any property available at the moment in ${expectedCity.name}`);
  });
});
