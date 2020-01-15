const Yup = require('yup');

class SearchValidator {
    validation(body, role) {
        let validationConfig;

        switch (role) {
            case 'index':
                validationConfig = Yup.object().shape({
                    latitude: Yup.number().required(),
                    longitude: Yup.number().required(),
                    tech: Yup.string(),
                });
        }

        return validationConfig.isValid(body);
    }
}

module.exports = new SearchValidator().validation;
