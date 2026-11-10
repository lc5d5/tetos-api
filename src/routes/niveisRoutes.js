const { buscar, criar, editar, deletar } = require("../controllers/niveisController");
const { validarDados } = require("../middlewares/niveisMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
    #swagger.tags = ['Níveis']
    #swagger.summary = 'Buscar'
    #swagger.description = 'Retorna um array de níveis cadastrados'
    #swagger.responses[200] = {
        description: 'Lista de níveis retornada com sucesso',
        schema: [{ id: 1, nome: 'Admin', createdAt: '2026-11-09T00:00:00.000Z' }]
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    buscar);

rotas.post("/",
    /* 
    #swagger.tags = ['Níveis']
    #swagger.summary = 'Criar'
    #swagger.description = 'Cria um novo nível'
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Dados para criação do nível',
        schema: { 
            $nome: 'Admin' 
        } 
    }
    #swagger.responses[201] = {
        description: 'Registro criado com sucesso',
        schema: { id: 1, nome: 'Admin' }
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos ou faltando'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    validarDados, criar);

rotas.put("/:id",
    /* 
    #swagger.tags = ['Níveis']
    #swagger.summary = 'Editar'
    #swagger.description = 'Edita um nível existente pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do nível (UUID ou numérico)'
    }
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Novos dados do nível',
        schema: { 
            $nome: 'Gerente' 
        } 
    }
    #swagger.responses[200] = {
        description: 'Registro atualizado com sucesso',
        schema: { id: 1, nome: 'Gerente' }
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos'
    }
    #swagger.responses[404] = {
        description: 'Registro não encontrado'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    validarDados, editar);

rotas.delete("/:id",
    /* 
    #swagger.tags = ['Níveis']
    #swagger.summary = 'Deletar'
    #swagger.description = 'Remove um nível pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do nível que será deletado'
    }
    #swagger.responses[204] = {
        description: 'Registro deletado com sucesso'
    }
    #swagger.responses[404] = {
        description: 'Registro não encontrado'
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    deletar);

module.exports = rotas;