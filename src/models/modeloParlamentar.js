const mongoose = require('mongoose');

const ParlamentarSchema = new mongoose.Schema({
    tipoAutor: String,
    partido: String,
    ufAutor: String,
    nome: String
});

module.exports = mongoose.model('Parlamentares', ParlamentarSchema, 'Parlamentares')