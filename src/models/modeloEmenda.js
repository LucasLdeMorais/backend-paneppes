const mongoose = require('mongoose');
const { getConnection } = require("../../mongoose");
const conn = getConnection();

const EmendasSchema = new mongoose.Schema({
    ano: Number,
    rp: String,
    autor: String,
    tipoAutor: String,
    partido: String,
    ufAutor: String,
    nroEmenda: Number,
    orgao: String,
    uo: String,
    nroUo: Number,
    acao: String,
    localizador: String,
    gnd: String,
    modalidade: String,
    naturezaDespesa: String,
    dotacaoInicialEmenda: Number,
    dotacaoAtualEmenda: Number,
    valorEmpenhado: Number,
    valorLiquidado: Number,
    valorPago: Number
});

module.exports = conn.model('Emendas', EmendasSchema, 'Emendas')
