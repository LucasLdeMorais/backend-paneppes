const mongoose = require('mongoose');
const { getConnection } = require("../../mongoose");
const conn = getConnection();

const ParlamentarSchema = new mongoose.Schema({
    tipoAutor: String,
    partido: String,
    ufAutor: String,
    nome: String
});

module.exports = conn.model('Parlamentares', ParlamentarSchema, 'Parlamentares')