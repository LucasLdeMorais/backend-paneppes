const Parlamentares = require('../models/modeloParlamentar.js');

module.exports = {
    
    async parlamentares(request, response, next) {
        try {
            const parlamentares = await Parlamentares.find().lean();
            if( parlamentares === [] ) {
                return response.status(404).json({mensagem: "Nenhum resultado encontrado"});
            }
            return response.status(200).json(parlamentares);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async parlamentaresPorNome(request, response, next) {
        try {
            const { nome } = request.query;
            const parlamentar = await Parlamentares.find({ nome: { $regex: '^' + nome, $options: 'i' } }).lean();
            if( parlamentar === null ) {
                return response.status(404).json({mensagem: "Parlamentar não encontrado"});
            }
            return response.status(200).json(parlamentar);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async parlamentaresPorPartido(request, response, next) {
        try {
            const { sigla } = request.query;
            const parlamentar = await Parlamentares.find({ sigla: { $regex: '^' + sigla.toUpperCase(), $options: 'i' } }).lean();
            console.log(regexp)
            if( parlamentar === null ) {
                return response.status(404).json({mensagem: "Partido não encontrado"});
            }
            return response.status(200).json(parlamentar);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

}
