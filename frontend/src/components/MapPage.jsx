import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ZoomButtons from "./RightButtonsMap";
import SearchBar from "./SearchBarMap";
import NavigationMenu from "./NavigationMenu";

const MapPage = ({ isLoggedIn }) => {
  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={[49.2328, 28.4812]}
        zoom={15}
        minZoom={10}
        maxZoom={20}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxNativeZoom={19}
          maxZoom={20}
        />
        <ZoomButtons isLoggedIn={isLoggedIn} />
      </MapContainer>
      <SearchBar />
      <NavigationMenu />
    </div>
  );
};

export default MapPage;
