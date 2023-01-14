const mongoose = require('mongoose');
const { getConnection } = require("../../mongoose");
const conn = getConnection();

const UniversidadeSchema = new mongoose.Schema({
    nome: String,
    uo: Number,
    sigla: String
});

module.exports = conn.model('Universidades', UniversidadeSchema, 'Universidades')