import { useRef, useEffect } from "react";
import { props_types } from "prop-types";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

Map.propTypes = {
  center: props_types.object.isRequired,
  zoom: props_types.number.isRequired,
  className: props_types.string,
  style: props_types.object,
};

export default Map;
