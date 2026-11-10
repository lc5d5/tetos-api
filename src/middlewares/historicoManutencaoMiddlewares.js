function validarDados(req, res, next) {
  const { 
    descricao,
    valor,
    data,
    imovel_id
   } = req.body;

  if (!descricao) {
    res.json({
      type: "warning",
      description: "Coluna 'descricao' não informada",
    });
  }

  if (!valor) {
    res.json({
      type: "warning",
      description: "Coluna 'valor' não informada",
    });
  }

  if (!data) {
    res.json({
      type: "warning",
      description: "Coluna 'data' não informada",
    });
  }

  if (!imovel_id) {
    res.json({
      type: "warning",
      description: "Coluna 'imovel_id' não informada",
    });
  }

  next();
}

module.exports = {
  validarDados,
};
