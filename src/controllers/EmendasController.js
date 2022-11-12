const Emendas = require('../models/modeloEmenda.js');

module.exports = {
    
    async emendas(request, response) {
        const listEmendas = await Emendas.find();
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

    async emendasPorAno(request, response) {
        const { ano } = request.params;
        const listEmendas = await Emendas.find({ 'ano': ano });
        return response.json(listEmendas);
    },

    async emendasPorAutor(request, response) {
        try {
            const { autor } = request.query;
            const listEmendas = await Emendas.find({ 'autor': autor });
            return response.status(200).json({
                total: listEmendas.length,
                emendas: listEmendas
            });
        } catch (error) {
            response.status(500).json({error: error})
        }
    },

    async emendasPorUnidadeOrcamentaria(request, response) {
        try {
            const { uo } = request.query;
            const listEmendas = await Emendas.find({ 'nroUo': uo });
            return response.status(200).json({
                total: listEmendas.length,
                emendas: listEmendas
            });
        } catch(error) {
            response.status(500).json({error: error})
        }
    },
}
