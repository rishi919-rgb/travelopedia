import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import socket, { connectSocket, disconnectSocket } from '../../services/socket';

const LocationTracker = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    let watchId;

    if (user) {
      // 1. Connect Socket.IO
      connectSocket(user._id);

      // 2. Start tracking location
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            
            // Emit live location to backend
            socket.emit('location_update', {
              userId: user._id,
              lat: latitude,
              lng: longitude,
              accuracy,
              timestamp: new Date().toISOString()
            });
          },
          (error) => {
            console.warn('Geolocation error:', error.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }
        );
      }
    } else {
      // Disconnect socket if user logs out
      disconnectSocket();
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [user]);

  // This is a headless component, it doesn't render anything
  return null;
};

export default LocationTracker;
