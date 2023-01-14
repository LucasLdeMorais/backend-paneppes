const express = require('express');
const router = express.Router();

const EmendasController = require('./controllers/EmendasController');    
const UniversidadesController = require('./controllers/UniversidadesController');
const ParlamentaresController = require('./controllers/ParlamentaresController')

router.get('/emendas/uo', EmendasController.emendasPorUnidadeOrcamentaria);
router.get('/emendas/ano', EmendasController.emendasPorAno);
router.get('/emendas/autor', EmendasController.emendasPorAutor);
router.get('/emendas', EmendasController.emendas);
router.get('/universidades', UniversidadesController.universidades);
router.get('/universidades/nome', UniversidadesController.universidadesPorNome);
router.get('/universidades/sigla', UniversidadesController.universidadesPorSigla);
router.get('/universidades/uo', UniversidadesController.universidadePorNumeroUnidadeOrcamentaria);
router.get('/parlamentares', ParlamentaresController.parlamentares);

module.exports = router;