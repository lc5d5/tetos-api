const express = require("express");
const cors = require("cors");
const niveisRoutes = require("./src/routes/niveisRoutes");
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes");
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const locatariosRoutes = require("./src/routes/locatariosRoutes");
const imoveisRoutes = require("./src/routes/imoveisRoutes");
const historicoImovel = require("./src/routes/historicoImovelRoutes");
const historicoManutencao = require("./src/routes/historicoManutencaoRoutes");
const { login } = require("./src/controllers/usuariosController");
const { usuarioAutenticado } = require("./src/middlewares/usuariosMiddlewares");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const app = express();

app.use(cors()); //permite que requisições externas acessem as rotas
app.use(express.json()); //transforma o JSON do corpo da requisição em JS

app.get("/", (req, res) => {
    res.redirect("/docs")
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/login", login);

app.use("/niveis", usuarioAutenticado, niveisRoutes);
app.use("/imoveis-tipo", usuarioAutenticado, imoveisTipoRoutes);
app.use("/usuarios", usuarioAutenticado, usuariosRoutes);
app.use("/locatarios", usuarioAutenticado, locatariosRoutes);
app.use("/imoveis", usuarioAutenticado, imoveisRoutes);
app.use("/manutencoes", usuarioAutenticado, historicoManutencao)
app.use("/historico-imovel", usuarioAutenticado, historicoImovel)

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
})