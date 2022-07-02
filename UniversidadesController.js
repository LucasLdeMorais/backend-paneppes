const Universidades = require('../models/modeloUniversidade.js');

module.exports = {
    
    async universidades(request, response) {
        try {
            const {queryParams} = request.query;
            console.log(queryParams)
            const listUniversidades = await Universidades.find(queryParams);
            if( listUniversidades === [] ) {
                return response.status(404).json({mensagem: "nenhum resultado encontrado"});
            }
            return response.status(200).json(listUniversidades);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorNome(request, response) {
        try {
            const { nome } = request.query;
            const Universidade = await Universidades.findOne({ nome: nome });
            if( Universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(Universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorSigla(request, response) {
        try {
            const { sigla } = request.query;
            const Universidade = await Universidades.findOne({ sigla: sigla });
            if( Universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(Universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadePorNumeroUnidadeOrcamentaria(request, response) {
        try {
            const { uo } = request.query;
            console.log(uo)
            const Universidade = await Universidades.findOne({ uo: uo });
            if( Universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(Universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    }
}
