const Emendas = require('../models/modeloEmenda.js');

module.exports = {
    
    async emendas(request, response) {
        try {
            const pagina = request.query.pagina;
            const limite = request.query.limite;
            let listEmendas = [];
            if((limite === undefined || limite === null)) {
                listEmendas = await Emendas.find();
                return response.status(200).json(listEmendas);
            }
            
            if (`${pagina}` === `0` || `${limite}` === `0`) {
                return response.status(400).json({error: "Parâmetro inválido"});
            }
            listEmendas = await Emendas.find();
            const indiceInicial = (pagina === undefined || pagina === null || `${pagina}` === `0`)? ((1 - 1) * limite) : ((parseInt(`${pagina}`)  - 1) * parseInt(`${limite}`));
            const indiceFinal = parseInt(`${pagina}`) * parseInt(`${limite}`);
            const total = Math.round(listEmendas.length / parseInt(`${limite}`));
            const resultado = listEmendas.slice(indiceInicial,indiceFinal);
            return response.status(200).json({
                pagina: pagina,
                totalPaginas: total,
                emendas: resultado
            });
        } catch(error) {
            return response.status(500).json({error: error.message});
        }
    },

    async emendasPorAno(request, response) {
        try {
            const { ano } = request.query;
            const listEmendas = await Emendas.find({ 'ano': ano });
            if (listEmendas.lenght === 0) {
                return response.status(404).json({mensagem: "Não constam emendas para este ano"});
            }
            return response.status(200).json(listEmendas);
        } catch(error) {
            return response.status(500).json({error: error});
        }
    },

    async emendasPorUf(request, response) {
        try {
            const { uf } = request.params;
            const listEmendas = await Emendas.find({ 'uf': uf });
            if (listEmendas.lenght === 0) {
                return response.status(404).json({mensagem: "Não constam emendas para este Estado"});
            }
            return response.status(200).json(listEmendas);
        } catch(error) {
            return response.status(500).json({error: error});
        }
    },

    async emendasPorAno(request, response) {
        try {
            const { ano } = request.params;
            const listEmendas = await Emendas.find({ 'ano': ano });
            if (listEmendas.lenght === 0) {
                return response.status(404).json({mensagem: "Não constam emendas para este ano"});
            }
            return response.status(200).json(listEmendas);
        } catch(error) {
            return response.status(500).json({error: error});
        }
    },

    async emendasPorAutor(request, response) {
        try {
            const { autor } = request.query;
            const listEmendas = await Emendas.find({ 'autor': autor });
            if (listEmendas.lenght === 0) {
                return response.status(404).json({mensagem: "Não constam emendas para este parlamentar"});
            }
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
            if (listEmendas.lenght === 0) {
                return response.status(404).json({mensagem: "Não constam emendas para esta unidade orçamentária"});
            }
            return response.status(200).json({
                total: listEmendas.length,
                emendas: listEmendas
            });
        } catch(error) {
            response.status(500).json({error: error})
        }
    },
}
