const mongoose = require('mongoose');

const poiSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['charging', 'clinic', 'police', 'shelter', 'transport'],
    },
    description: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    address: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    operatingHours: {
      type: String, // e.g., "24/7" or "09:00-17:00"
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    verifiedByAura: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create a geospatial index for efficient proximity queries
poiSchema.index({ location: '2dsphere' });

const POI = mongoose.model('POI', poiSchema);

module.exports = POI;
