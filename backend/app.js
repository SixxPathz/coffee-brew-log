
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const brewsRouter = require('./routes/brews');
app.use('/api/brews', brewsRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Coffee Brew Log API' });
});

// Start server after DB connection

sequelize.sync()
  .then(() => {
    console.log("Database synced 🚀");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
