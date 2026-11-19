const { buscar, criar, editar, deletar } = require("../controllers/imoveisTipoController");
const { validarDados } = require("../middlewares/imoveisTipoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
    #swagger.tags = ['Tipos']
    #swagger.summary = 'Buscar'
    #swagger.description = 'Retorna um array de tipos de imóvel cadastrados'
    #swagger.responses[200] = {
        description: 'Lista de tipos retornada com sucesso',
        schema: [{ 
        id: 1, 
        nome: 'Casa', 
        createdAt: '2026-11-09T00:00:00.000Z'
        updatedAt: '2026-11-09T00:00:00.000Z' }]
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    buscar);

rotas.post("/",
    /* 
    #swagger.tags = ['Tipos']
    #swagger.summary = 'Criar'
    #swagger.description = 'Cria um novo tipo'
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Dados para criação do tipo',
        schema: { 
            $nome: 'Casa' 
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
    #swagger.tags = ['Tipos']
    #swagger.summary = 'Editar'
    #swagger.description = 'Edita um tipo existente pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do tipo (UUID ou numérico)'
    }
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Novos dados do nível',
        schema: { 
            $nome: 'Apartamento' 
        } 
    }
    #swagger.responses[200] = {
        description: 'Registro atualizado com sucesso',
        schema: { id: 1, nome: 'Apartamento' }
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
    #swagger.tags = ['Tipos']
    #swagger.summary = 'Deletar'
    #swagger.description = 'Remove um tipo pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do tipo que será deletado'
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