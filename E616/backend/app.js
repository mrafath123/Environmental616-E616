const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sightingRoutes = require('./routes/sightings');
const authRoutes = require('./routes/auth');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api/sightings', sightingRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
