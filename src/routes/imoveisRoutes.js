const {
  buscar,
  criar,
  editar,
  deletar,
} = require("../controllers/imoveisController");
const { validarDados } = require("../middlewares/imoveisMiddlewares");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/imoveis");
  },

  filename: function (req, file, cb) {
    const nome = path.basename(file.originalname);
    cb(null, `${Date.now()}-${nome}`)
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 //limite de 5MB
    },
    fileFilter: (_, file, callback) => {
        const tiposAceitos = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!tiposAceitos.includes(file.mimetype)) {
            callback(new Error("Tipo de arquivo não permitido. Envie apenas imagens."));
            return;
        }
        callback(null, true);
    }
});

const rotas = require("express").Router();

//agrupando as rotas

rotas.get("/", buscar);
rotas.post("/", upload.single('imagem'), validarDados, criar);
rotas.put("/:id", validarDados, editar);
rotas.delete("/:id", deletar);

module.exports = rotas;
