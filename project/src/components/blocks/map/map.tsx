import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../../hooks/useMap';
import {City, Offers, Offer} from '../../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../../const';
import 'leaflet/dist/leaflet.css';
import classnames from 'classnames';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
  className?: string | string[];
};

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const selectedIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const isSelectedOffer = (selected: Offer | undefined, offer: Offer): boolean => selected !== undefined && offer.id === selected.id;

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer, className} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.lat,
          lng: offer.city.lng,
        });

        const icon = isSelectedOffer(selectedOffer, offer)
          ? selectedIcon
          : defaultIcon;

        marker.setIcon(icon).addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return <section ref={mapRef} className={classnames('map', className)} />;
}

export default Map;
