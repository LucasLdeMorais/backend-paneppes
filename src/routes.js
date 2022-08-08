const express = require('express');
const routes = express.Router();

const EmendasController = require('./controllers/EmendasController');    
const UniversidadesController = require('./controllers/UniversidadesController');
const ParlamentaresController = require('./controllers/ParlamentaresController')

routes.get('/emendas/uo', EmendasController.emendasPorUnidadeOrcamentaria);
routes.get('/emendas/ano', EmendasController.emendasPorAno);
routes.get('/emendas', EmendasController.emendas);
routes.get('/universidades', UniversidadesController.universidades);
routes.get('/universidades/nome', UniversidadesController.universidadesPorNome);
routes.get('/universidades/sigla', UniversidadesController.universidadesPorSigla);
routes.get('/universidades/uo', UniversidadesController.universidadePorNumeroUnidadeOrcamentaria);
routes.get('/parlamentares', ParlamentaresController.parlamentares);

module.exports = routes;