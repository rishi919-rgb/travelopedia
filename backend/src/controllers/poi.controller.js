const POI = require('../models/poi.model');

// @desc    Get all POIs or filter by category
// @route   GET /api/pois
// @access  Public (or Private depending on strategy, assuming Public for map discovery)
const getPOIs = async (req, res) => {
  try {
    const { category } = req.query;
    
    // Build query
    const query = {};
    if (category) {
      query.category = category;
    }

    const pois = await POI.find(query);
    res.json(pois);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching POIs', error: error.message });
  }
};

// @desc    Get POIs within a radius
// @route   GET /api/pois/radius/:lat/:lng/:distance
// @access  Public
const getPOIsInRadius = async (req, res) => {
  try {
    const { lat, lng, distance } = req.params;
    const { category } = req.query;

    // Convert distance to radians. Earth radius = 3963.2 mi / 6378.1 km
    // Assuming distance is provided in kilometers
    const radius = distance / 6378.1;

    // Build geospatial query
    const query = {
      location: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius]
        }
      }
    };

    if (category) {
      query.category = category;
    }

    const pois = await POI.find(query);
    
    res.json({
      count: pois.length,
      data: pois
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching POIs by radius', error: error.message });
  }
};

// @desc    Create a new POI (Admin/System use)
// @route   POST /api/pois
// @access  Private
const createPOI = async (req, res) => {
  try {
    const poi = await POI.create(req.body);
    res.status(201).json(poi);
  } catch (error) {
    res.status(400).json({ message: 'Invalid POI data', error: error.message });
  }
};

module.exports = {
  getPOIs,
  getPOIsInRadius,
  createPOI
};
