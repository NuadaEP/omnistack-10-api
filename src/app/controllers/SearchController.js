const DevModel = require('../models/DevModel');
const SearchValidator = require('../validators/SearchValidator');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

class SearchController {
  async index(req, res) {
    try {
      await SearchValidator(req.query, 'index');

      const { latitude, longitude, techs } = req.query;

      const techsArray = ParseStringAsArray(techs);

      const response = await DevModel.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new SearchController();
