const Emendas = require('../models/modeloEmenda.js');

module.exports = {
    
    async emendas(request, response) {
        const listEmendas = await Emendas.find();
        console.log(listEmendas)
        return response.json(listEmendas);
    },

    async emendasPorAno(request, response) {
        const { ano } = request.params;
        const listEmendas = await Emendas.find({ 'ano': ano });
        return response.json(listEmendas);
    },

    async emendasPorUf(request, response) {
        const { uf } = request.params;
        const listEmendas = await Emendas.find({ 'uf': uf });
        return response.json(listEmendas);
    },

    async emendasPorUnidadeOrcamentaria(request, response) {
        try {
            const { uo } = request.query;
            const listEmendas = await Emendas.find({ uo: {$regex: `${uo}`} });
            return response.status(200).json(listEmendas);
        } catch(error) {
            response.status(500).json({error: error})
        }
    },

}
