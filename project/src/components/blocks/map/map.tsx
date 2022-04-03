import {useRef, useEffect} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import { Hotels , Hotel} from 'types/hotel';
import 'leaflet/dist/leaflet.css';
import classnames from 'classnames';
import useMap from 'hooks/useMap';
import { isSelectedHotel } from 'utils/common';

const defaultIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const selectedIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map(props: MapProps): JSX.Element {
  const { hotels, selectedHotel, className} = props;
  const [firstHotel] = hotels;
  const {city} = firstHotel;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersLayer = new LayerGroup();

  useEffect(() => {
    markersLayer.clearLayers();
    if (map) {
      hotels.forEach((hotel) => {
        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude,
        });

        marker.setIcon(
          isSelectedHotel(selectedHotel, hotel) ? selectedIcon : defaultIcon,
        ).addTo(markersLayer);
      });

      markersLayer.addTo(map);
    }

    return () => {
      markersLayer.clearLayers();
    };

  }, [map, hotels, selectedHotel, city, mapRef]);

  return <section ref={mapRef} className={classnames('map', className)} />;
}

type MapProps = {
  hotels: Hotels;
  selectedHotel: Hotel | undefined;
  className?: string | string[];
};

export default Map;
