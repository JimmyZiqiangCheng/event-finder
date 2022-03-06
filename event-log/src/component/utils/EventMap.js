import React from "react";
import GoogleMapReact from "google-map-react";

function EventMap() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="event-map" style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default EventMap;
