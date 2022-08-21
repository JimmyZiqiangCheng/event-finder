import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 43.6532,
      lng: 79.3832,
    },
    zoom: 9,
  };

  return (
    <div className="map-simple" style={{ height: "20vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
