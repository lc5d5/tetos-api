const { buscar, criar, editar, deletar } = require("../controllers/usuariosController");
const rotas = require("express").Router();

//agrupando as rotas

rotas.get("/", buscar);
rotas.post("/", criar);
rotas.put("/:id", editar);
rotas.delete("/:id", deletar)

module.exports = rotas;
