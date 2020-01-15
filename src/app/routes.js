const { Router } = require('express');
const controllers = require('./controllers');

const routes = Router();

routes.get('/devs', controllers.DevController.index);
routes.get('/devs/:id', controllers.DevController.show);
routes.post('/devs', controllers.DevController.store);
routes.put('/devs/:id', controllers.DevController.update);
routes.delete('/devs/:id', controllers.DevController.delete);

routes.get('/search', controllers.SearchController.index);

module.exports = routes;
