const mongoose = require('mongoose');

const safeZoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    boundary: {
      type: {
        type: String,
        enum: ['Polygon'],
        required: true,
        default: 'Polygon',
      },
      coordinates: {
        type: [[[Number]]], // Array of arrays of arrays of numbers: [[[lng, lat], [lng, lat], ...]]
        required: true,
      },
    },
    riskLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low',
      required: true,
    },
    activeHours: {
      type: String, // e.g., "Always", "Daytime only"
      default: 'Always',
    },
    verifiedByAuthorities: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create a geospatial index for efficient polygon queries
safeZoneSchema.index({ boundary: '2dsphere' });

const SafeZone = mongoose.model('SafeZone', safeZoneSchema);

module.exports = SafeZone;
