const PRISMA = require("../services");


async function buscar (req, res) {
    try {
        const linhas = await PRISMA.historico_imovel.findMany();
        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

async function criar (req, res) {
    try {
        const dados = req.body;
        const sql = await PRISMA.historico_imovel.create({
            data:{
                ...dados, 
                data_entrada: new Date(`${dados.data_entrada}`),
                data_saida: new Date(`${dados.data_saida}`)
            }
        })

        res.json({
            type: "success",
            description: "registro criado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

async function editar (req, res) {
    try {
        const dados = req.body;
        const {id} = req.params
        const sql = await PRISMA.historico_imovel.update({
            where: {id},
            data:dados
        })

        res.json({
            type: "success",
            description: "registro editado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.historico_imovel.delete({
            where: {id},
        })

        res.json({
            type: "success",
            description: "registro deletado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
}