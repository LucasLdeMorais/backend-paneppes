const Parlamentares = require('../models/modeloParlamentar.js');

module.exports = {
    
    async parlamentares(request, response) {
        try {
            const parlamentares = await Parlamentares.find();
            if( parlamentares === [] ) {
                return response.status(404).json({mensagem: "Nenhum resultado encontrado"});
            }
            return response.status(200).json(parlamentares);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async parlamentaresPorNome(request, response) {
        try {
            const { nome } = request.query;
            const parlamentar = await Parlamentares.find({ nome: { $regex: '^' + nome, $options: 'i' } });
            if( parlamentar === null ) {
                return response.status(404).json({mensagem: "Parlamentar não encontrado"});
            }
            return response.status(200).json(parlamentar);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

    async parlamentaresPorPartido(request, response) {
        try {
            const { sigla } = request.query;
            const parlamentar = await Parlamentares.find({ sigla: { $regex: '^' + sigla.toUpperCase(), $options: 'i' } });
            console.log(regexp)
            if( parlamentar === null ) {
                return response.status(404).json({mensagem: "Parlamentar não encontrado"});
            }
            return response.status(200).json(parlamentar);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

}
