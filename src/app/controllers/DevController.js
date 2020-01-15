const AxiosService = require('../services/AxiosService');
const DevModel = require('../models/DevModel');
const DevValidator = require('../validators/DevValidator');

class DevController {
    async index(req, res) {
        const response = await DevModel.find();

        return res.json(response);
    }

    async show(req, res) {
        const response = await DevModel.findById(req.params.id);

        return res.json(response);
    }

    async store(req, res) {
        try {
            await DevValidator(req.body, 'store');

            const { github_username, techs, latitude, longitude } = req.body;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            const findDev = await DevModel.findOne({ github_username });

            if (findDev)
                return res
                    .status(400)
                    .json({ error: 'This user is already registred' });

            const {
                data: { name = login, avatar_url, bio },
            } = await AxiosService.get(
                `https://api.github.com/users/${github_username}`
            );

            const techsArray = techs.split(',').map(tech => tech.trim());

            const dbResponse = await DevModel.create({
                github_username,
                techs: techsArray,
                name,
                avatar_url,
                bio,
                location,
            });

            return res.json(dbResponse);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            await DevValidator(req.body, 'update');

            const response = await DevModel.findByIdAndUpdate(
                req.params.id,
                req.body
            );

            return res.json(response);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        await DevModel.findByIdAndDelete(req.params.id);

        return res.send(true);
    }
}

module.exports = new DevController();
