import { Nullable } from 'vitest';
import {useRef, useEffect} from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { OfferCity, OfferList, OffersList } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: OfferCity;
  offers: OffersList;
  activeOffer: Nullable<OfferList>;
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
  const {city, offers, activeOffer} = props;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, mapRef: mapRef});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if(map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon:  activeOffer !== undefined && activeOffer !== null && offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markerLayer.current);

      });
    }
  }, [activeOffer, map, offers]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
