import { io } from 'socket.io-client';

// The URL should point to the backend server. 
// For development it's typically localhost:5000. In production, it might be the same origin.
const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const socket = io(SOCKET_URL, {
  autoConnect: false, // We'll manually connect when the user logs in
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export const connectSocket = (userId) => {
  if (!socket.connected) {
    // You can attach user authentication details here in the future
    socket.auth = { userId };
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;
