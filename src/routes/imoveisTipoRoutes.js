const { buscar, criar, editar, deletar } = require("../controllers/imoveisTipoController");
const { validarDados } = require("../middlewares/imoveisTipoMiddlewares");

const rotas = require("express").Router();

//agrupando as rotas

rotas.get("/", buscar);
rotas.post("/", validarDados, criar);
rotas.put("/:id", validarDados, editar);
rotas.delete("/:id", deletar)

module.exports = rotas;
