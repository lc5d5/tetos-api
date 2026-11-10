function validarDados(req, res, next) {
    const colunas = [
        "descricao",
        "data_entrada",
        "data_saida",
        "imovel_id",
        "locatario_id"
    ];
    const dados = req.body;
    
    let campoAusentes = colunas.filter(chave => !Object.keys(dados).includes(chave));

    if(campoAusentes.length > 0){

        res.json(campoAusentes.map(campo => {
            return {
                type: "warning",
                description: `Coluna ${campo} não informada`
            }
        }))
    }

    next();
}

module.exports = {
    validarDados
}