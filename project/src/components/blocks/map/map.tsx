import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from 'hooks/useMap';
import { Hotels , Hotel, City} from 'types/hotel';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../../const';
import 'leaflet/dist/leaflet.css';
import classnames from 'classnames';

type MapProps = {
  city: City;
  hotels: Hotels;
  selectedHotel: Hotel | undefined;
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

const isSelectedOffer = (selected: Hotel | undefined, hotel: Hotel): boolean => selected !== undefined && hotel.id === selected.id;

function Map(props: MapProps): JSX.Element {
  const {city, hotels, selectedHotel, className} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      hotels.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.latitude,
        });

        const icon = isSelectedOffer(selectedHotel, offer)
          ? selectedIcon
          : defaultIcon;

        marker.setIcon(icon).addTo(map);
      });
    }
  }, [map, hotels, selectedHotel]);

  return <section ref={mapRef} className={classnames('map', className)} />;
}

export default Map;
