const Axios = require('axios');

class AxiosService {
    async get(url, config = null) {
        try {
            return await Axios.get(url, { ...config });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AxiosService();
