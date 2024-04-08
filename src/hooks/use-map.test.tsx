import { render, renderHook, screen } from '@testing-library/react';
import { createRef } from 'react';
import useMap from './use-map';
import { CITIES } from '../const';

describe('Hook: useMap', ()=> {
  it('should return map', () => {
    const mapRef = createRef<HTMLDivElement>();
    const useMapProps = {mapRef: mapRef, location: CITIES[0].location};
    const { result } = renderHook(() => useMap(useMapProps));

    render(<div data-testid="hook useMap"ref={mapRef}/>);
    const hook = screen.getByTestId('hook useMap');

    expect(result.current).toBe(null);
    expect(hook).toBeInTheDocument();
  });
});
