const mongoose = require('mongoose');

const sightingSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  species: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Sighting', sightingSchema);
