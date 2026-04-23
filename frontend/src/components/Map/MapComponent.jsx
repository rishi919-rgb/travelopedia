import React, { useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
  });

  // Placeholder token logic
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN; // Set this in your .env file

  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={mapboxToken}
        reuseMaps
      >
        {/* Pins/Layers will be added here in future steps */}
      </Map>
    </div>
  );
};

export default MapComponent;
