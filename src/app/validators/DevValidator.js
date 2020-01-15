const Yup = require('yup');

class DevValidator {
    validation(body, role) {
        let validationConfig;

        switch (role) {
            case 'store':
                validationConfig = Yup.object().shape({
                    github_username: Yup.string().required(),
                    techs: Yup.string().required(),
                    latitude: Yup.number().required(),
                    longitude: Yup.number().required(),
                });

            case 'update':
                validationConfig = Yup.object().shape({
                    name: Yup.string(),
                    github_username: Yup.string(),
                    bio: Yup.string(),
                    avatar_url: Yup.string(),
                    techs: Yup.array(),
                });
        }

        return validationConfig.isValid(body);
    }
}

module.exports = new DevValidator().validation;
