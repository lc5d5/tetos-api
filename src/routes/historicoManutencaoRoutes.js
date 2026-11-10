const { buscar, criar, editar, deletar } = require("../controllers/historicoManutencaoController");
const { validarDados } = require("../middlewares/historicoManutencaoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
    #swagger.tags = ['Manutenção']
    #swagger.summary = 'Buscar'
    #swagger.description = 'Retorna um array de manutenções cadastrados'
    #swagger.responses[200] = {
        description: 'Lista de manutenções retornada com sucesso',
        schema: [{ 
        id: 1, 
        descricao: 'Troca de torneira',
        valor: 10,
        data: '10/11/2026',
        imovel_id: 'cccc-ddddd-eeee 
        createdAt: '2026-11-09T00:00:00.000Z',
        updatedAt: '2026-11-09T00:00:00.000Z' }]
    }
    #swagger.responses[500] = {
        description: 'Erro interno no servidor'
    }
    */
    buscar);

rotas.post("/",
    /* 
    #swagger.tags = ['Manutenção']
    #swagger.summary = 'Criar'
    #swagger.description = 'Cria um novo histórico'
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Dados para criação do histórico',
        schema: { 
          $descricao: 'Troca de torneira',
          $valor: 10,
          $data: '10/11/2026',
          $imovel_id: 'cccc-dddd-eeee  
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
    #swagger.tags = ['Manutenção']
    #swagger.summary = 'Editar'
    #swagger.description = 'Edita um histórico existente pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do histórico (UUID ou numérico)'
    }
    #swagger.parameters['body'] = { 
        in: 'body', 
        required: true, 
        description: 'Novos dados do histórico',
        schema: { 
          $descricao: 'Troca de torneira',
          $valor: 10,
          $data: '10/11/2026',
          $imovel_id: 'cccc-dddd-eeee
        } 
    }
    #swagger.responses[200] = {
        description: 'Registro atualizado com sucesso',
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
    #swagger.tags = ['Manutenção']
    #swagger.summary = 'Deletar'
    #swagger.description = 'Remove um histórico pelo ID'
    #swagger.parameters['id'] = {
        in: 'path', 
        required: true, 
        type: 'string',
        description: 'ID do histórico que será deletado'
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