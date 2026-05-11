import React, { useState, useEffect } from 'react';
import { Map, Marker } from 'react-map-gl/mapbox';
import { useDispatch, useSelector } from 'react-redux';
import { getPOIsInRadius } from '../../store/slices/poiSlice';
import { Zap, Activity, ShieldAlert, Home, Navigation } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ children }) => {
  const dispatch = useDispatch();
  const { pois } = useSelector((state) => state.poi);

  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
  });

  // Initial fetch
  useEffect(() => {
    dispatch(getPOIsInRadius({ lat: viewState.latitude, lng: viewState.longitude, distance: 5 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleMoveEnd = (evt) => {
    dispatch(getPOIsInRadius({ lat: evt.viewState.latitude, lng: evt.viewState.longitude, distance: 5 }));
  };

  // Placeholder token logic
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN; // Set this in your .env file

  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        onMoveEnd={handleMoveEnd}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={mapboxToken}
        reuseMaps
      >
        {children}
        
        {/* Render Live POIs */}
        {pois && pois.map(poi => {
          let Icon;
          let color;
          switch (poi.category) {
            case 'charging': Icon = Zap; color = '#00ffcc'; break; // Travelopedia Cyan
            case 'clinic': Icon = Activity; color = '#ff4d4d'; break; // SOS Red
            case 'police': Icon = ShieldAlert; color = '#3399ff'; break;
            case 'shelter': Icon = Home; color = '#ff9900'; break;
            default: Icon = Navigation; color = 'white';
          }
          
          return (
            <Marker 
              key={poi._id}
              longitude={poi.location.coordinates[0]} 
              latitude={poi.location.coordinates[1]} 
              anchor="bottom"
            >
              <div style={{
                background: color,
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 10px ${color}80`,
                cursor: 'pointer',
                border: '2px solid var(--bg-primary)'
              }}>
                <Icon size={14} color="var(--bg-primary)" />
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent;
