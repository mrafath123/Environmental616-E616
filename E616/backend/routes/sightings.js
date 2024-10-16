const express = require('express');
const Sighting = require('../models/Sighting');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

// Report a sighting
router.post('/', authenticate, async (req, res) => {
  try {
    const { latitude, longitude, species } = req.body;
    const sighting = new Sighting({
      latitude,
      longitude,
      species,
      userId: req.userId
    });
    await sighting.save();
    res.status(201).json({ message: 'Sighting reported successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to report sighting' });
  }
});

// Get all sightings
router.get('/', async (req, res) => {
  try {
    const sightings = await Sighting.find().sort('-date');
    res.json(sightings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sightings' });
  }
});

module.exports = router;
