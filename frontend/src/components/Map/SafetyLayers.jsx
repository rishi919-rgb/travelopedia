import React from 'react';
import { Source, Layer } from 'react-map-gl/mapbox';

const SafetyLayers = () => {
  // Mock GeoJSON for Safe Zones (Representing high safety score areas)
  const safeZones = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
        properties: { radius: 800, score: 98 }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-122.41, 37.79] },
        properties: { radius: 600, score: 92 }
      }
    ]
  };

  return (
    <Source id="safe-zones-source" type="geojson" data={safeZones}>
      {/* Outer Glow Layer */}
      <Layer
        id="safe-zone-glow"
        type="circle"
        paint={{
          'circle-radius': 120,
          'circle-color': '#00ffcc',
          'circle-opacity': 0.1,
          'circle-blur': 1
        }}
      />
      
      {/* Main Zone Layer */}
      <Layer
        id="safe-zone-main"
        type="circle"
        paint={{
          'circle-radius': 80,
          'circle-color': '#00ffcc',
          'circle-opacity': 0.15,
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#00ffcc',
          'circle-stroke-opacity': 0.5
        }}
      />
    </Source>
  );
};

export default SafetyLayers;
