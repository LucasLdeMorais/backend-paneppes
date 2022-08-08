const mongoose = require('mongoose');

const UniversidadeSchema = new mongoose.Schema({
    nome: String,
    uo: Number,
    sigla: String
});

module.exports = mongoose.model('Universidades', UniversidadeSchema, 'Universidades')