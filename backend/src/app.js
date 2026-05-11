const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const poiRoutes = require('./routes/poi.routes');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/pois', poiRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Travelopedia API is running...');
});

module.exports = app;
