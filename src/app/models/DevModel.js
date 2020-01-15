const Mongoose = require('mongoose');

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
    },
    {
        timestamps: true,
    }
);

module.exports = Mongoose.model('Dev', DevModel);
