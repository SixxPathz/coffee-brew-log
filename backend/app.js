require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Middleware
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
  origin: [allowedOrigin],
  credentials: true
}));
app.use(express.json());

// Register API routes
const brewsRouter = require('./routes/brews');
app.use('/api/brews', brewsRouter);

// Only serve static files if the build directory exists
const buildPath = path.join(__dirname, 'public', 'build');
const fs = require('fs');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  // Serve React index.html for any unknown routes (except API)
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Coffee Brew Log API' });
});

// Start server after DB connection

sequelize.sync()
  .then(() => {
    console.log("Database synced 🚀");
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
