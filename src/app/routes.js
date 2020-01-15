const { Router } = require('express');
const controllers = require('./controllers');

const routes = Router();

routes.get('/sample', controllers.SampleController.index);
routes.get('/sample/:id', controllers.SampleController.show);
routes.post('/sample', controllers.SampleController.store);
routes.put('/sample/:id', controllers.SampleController.update);
routes.delete('/sample/:id', controllers.SampleController.delete);

routes.get('/devs', controllers.DevController.index);
routes.get('/devs/:id', controllers.DevController.show);
routes.post('/devs', controllers.DevController.store);
routes.put('/devs/:id', controllers.DevController.update);
routes.delete('/devs/:id', controllers.DevController.delete);

module.exports = routes;
