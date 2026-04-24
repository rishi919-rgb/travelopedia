const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Placeholder
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

app.get('/', (req, res) => {
  res.send('AURA API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
