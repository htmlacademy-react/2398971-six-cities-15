import { Nullable } from 'vitest';
import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import { OfferCity, OffersList } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: OfferCity;
  offersList: OffersList[];
  activeOffer: Nullable<OffersList>;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offersList, activeOffer} = props;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, mapRef: mapRef});

  useEffect(() => {
    if (map) {
      offersList.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon:  activeOffer !== undefined && activeOffer !== null && offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);

      });
    }
  }, [activeOffer, map, offersList]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
