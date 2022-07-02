const mongoose = require('mongoose');

const UniversidadeSchema = new mongoose.Schema({
    nome: String,
    numeroUo: Number
});

module.exports = mongoose.model('Universidades', UniversidadeSchema, 'Universidades')