const Mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema');

const DevModel = new Mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        github_username: {
            type: String,
            require: true,
        },
        bio: {
            type: String,
            require: true,
        },
        avatar_url: {
            type: String,
            require: true,
        },
        techs: {
            type: [String],
            require: true,
        },
        location: {
            type: PointSchema,
            index: '2dsphere',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Mongoose.model('Dev', DevModel);
