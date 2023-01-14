const Universidades = require('../models/modeloUniversidade.js');

module.exports = {
    
    async universidades(request, response, next) {
        try {
            const universidades = await Universidades.find().lean();
            if( universidades === [] ) {
                return response.status(404).json({mensagem: "Nenhum resultado encontrado"});
            }
            return response.status(200).json(universidades);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorNome(request, response, next) {
        try {
            const { nome } = request.query;
            const universidade = await Universidades.find({ nome: { $regex: '^' + nome, $options: 'i' } }).lean();
            if( universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorSigla(request, response, next) {
        try {
            const { sigla } = request.query;
            const universidade = await Universidades.find({ sigla: { $regex: '^' + sigla.toUpperCase(), $options: 'i' } }).lean();
            console.log(regexp)
            if( universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadePorNumeroUnidadeOrcamentaria(request, response, next) {
        try {
            const { uo } = request.query;
            console.log(uo)
            const Universidade = await Universidades.findOne({ uo: uo }).lean();
            if( Universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(Universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    }
}
