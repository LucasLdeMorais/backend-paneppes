const mongoose = require('mongoose');

const EmendasSchema = new mongoose.Schema({
    ano: Number,
    rp: String,
    autor: String,
    tipoAutor: String,
    partido: String,
    ufAutor: String,
    nro: Number,
    orgao: String,
    uo: String,
    acao: String,
    localizador: String,
    gnd: String,
    modalidade: String,
    naturezaDespesa: String,
    dotacaoInicial: Number,
    dotacaoAtual: Number,
    valorEmpenhado: Number,
    valorLiquidado: Number,
    valorPago: Number
});

module.exports = mongoose.model('Emendas', EmendasSchema, 'Emendas')
