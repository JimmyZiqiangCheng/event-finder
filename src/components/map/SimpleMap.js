import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { getLocation } from "../../services/geolocationApi";

function SimpleMap({ address }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    const getGeo = async () => {
      //const [la, lo] = await getLocation(address);
      const [la, lo] = [43.65, 280.62];
      setLatitude(la);
      setLongitude(lo);
    };
    getGeo();
  }, []);
  return (
    <div className="map-simple" style={{ height: "30vh", width: "100%" }}>
      {latitude && longitude && (
        <MapContainer
          className="leaflet-container"
          center={[latitude, longitude]}
          zoom={11}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}></Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default SimpleMap;
