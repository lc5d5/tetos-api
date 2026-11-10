const PRISMA = require("../services");

async function buscar(req, res) {
  try {
    const linhas = await PRISMA.historico_imovel.findMany();
    res.json(linhas);
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function criar(req, res) {
  try {
    let { descricao, data_entrada, data_saida, valor_aluguel, valor_iptu, imovel_id, locatario_id, valor_condominio } = req.body;

    const sql = await PRISMA.historico_imovel.create({
      data: {
        descricao,
        data_entrada,
        data_saida,
        valor_aluguel,
        valor_iptu,
        imovel_id,
        locatario_id,
        valor_condominio
      },
    });

    res.json({
      type: "success",
      description: "Registro criado com sucesso",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function editar(req, res) {
  try {
    const dados = req.body;
    const { id } = req.params;
    const sql = await PRISMA.historico_imovel.update({
      where: { id },
      data: dados,
    });

    res.json({
      type: "success",
      description: "Registro editado com sucesso",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function deletar(req, res) {
  try {
    const { id } = req.params;
    const sql = await PRISMA.historico_imovel.delete({
      where: { id },
    });

    res.json({
      type: "success",
      description: "Registro deletado com sucesso",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

module.exports = {
  buscar,
  criar,
  editar,
  deletar,
};
