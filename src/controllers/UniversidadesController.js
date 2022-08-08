const Universidades = require('../models/modeloUniversidade.js');

module.exports = {
    
    async universidades(request, response) {
        try {
            const universidades = await Universidades.find();
            if( universidades === [] ) {
                return response.status(404).json({mensagem: "nenhum resultado encontrado"});
            }
            return response.status(200).json(universidades);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorNome(request, response) {
        try {
            const { nome } = request.query;
            const universidade = await Universidades.find({ nome: { $regex: '^' + nome, $options: 'i' } });
            if( universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(universidade);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async universidadesPorSigla(request, response) {
        try {
            const { sigla } = request.query;
            const universidade = await Universidades.find({ sigla: { $regex: '^' + sigla.toUpperCase(), $options: 'i' } });
            console.log(regexp)
            if( universidade === null ) {
                return response.status(404).json({mensagem: "Universidade não encontrada"});
            }
            return response.status(200).json(universidade);
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
