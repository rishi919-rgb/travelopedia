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

// Socket.IO Connection Handler
io.on('connection', (socket) => {
  console.log(`⚡ Socket connected: ${socket.id}`);

  // Basic disconnect event
  socket.on('disconnect', () => {
    console.log(`🔌 Socket disconnected: ${socket.id}`);
  });
});

// Start unified server
server.listen(PORT, () => {
  console.log(`🚀 Travelopedia Server running on port ${PORT}`);
});
