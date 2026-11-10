const { buscar, criar, editar, deletar } = require("../controllers/niveisController");
const { validarDados } = require("../middlewares/niveisMiddlewares");

const rotas = require("express").Router();

//agrupando as rotas

rotas.get("/", buscar);
rotas.post("/", validarDados, criar);
rotas.put("/:id", validarDados, editar);
rotas.delete("/:id", deletar)

module.exports = rotas;