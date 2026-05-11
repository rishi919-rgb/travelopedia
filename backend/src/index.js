const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

// Create HTTP server wrapping Express
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // For development. In production, restrict to frontend URL
    methods: ['GET', 'POST']
  }
});

// In-memory store for live locations (MVP mapping)
// In a production app, consider Redis for scaling across instances
const activeTrackers = new Map();

// Socket.IO Connection Handler
io.on('connection', (socket) => {
  console.log(`⚡ Socket connected: ${socket.id}`);

  // Listen for live location updates from the frontend
  socket.on('location_update', (data) => {
    const { userId, lat, lng, accuracy, timestamp } = data;
    
    // Store latest location
    activeTrackers.set(userId, { lat, lng, accuracy, timestamp, socketId: socket.id });
    
    // Future expansion: If SOS is active, emit to emergency contacts
    // io.to(contactRoom).emit('sos_location_update', { lat, lng });
  });

  // Basic disconnect event
  socket.on('disconnect', () => {
    console.log(`🔌 Socket disconnected: ${socket.id}`);
    
    // Clean up tracker data
    for (const [userId, tracker] of activeTrackers.entries()) {
      if (tracker.socketId === socket.id) {
        activeTrackers.delete(userId);
        break;
      }
    }
  });
});

// Start unified server
server.listen(PORT, () => {
  console.log(`🚀 Travelopedia Server running on port ${PORT}`);
});
