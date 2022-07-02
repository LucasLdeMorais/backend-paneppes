const express = require('express');
const routes = express.Router();

const EmendasController = require('./controllers/EmendasController');    
const UniversidadesController = require('./controllers/UniversidadesController');

routes.get('/emendas/uo', EmendasController.emendasPorUnidadeOrcamentaria);
routes.get('/emendas', EmendasController.emendas);
routes.get('/universidades', UniversidadesController.universidades);
routes.get('/universidades/nome', UniversidadesController.universidadesPorNome);
routes.get('/universidades/uo', UniversidadesController.universidadePorNumeroUnidadeOrcamentaria);

module.exports = routes;
