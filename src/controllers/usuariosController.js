const PRISMA = require("../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function buscar(req, res) {
  try {
    const linhas = await PRISMA.usuarios.findMany({
      include: {
        niveis: {
          select: {
            nome: true
          }
        }
      }, //para mostrar o nível do usuário
      omit: {
        senha: true
      } // para omitir informações específicas  
    });
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
    let { nome, email, senha, niveis_id } = req.body;

    senha = await bcrypt.hash(senha, 10)

    await PRISMA.usuarios.create({
      data: {
        nome,
        email,
        senha,
        niveis_id
      },
    }); //necessário criar parâmetros para a função create()

    res.json({
      type: "success",
      description: "Registro criado com sucesso.",
    });
  } catch (error) {
    res.json({
      type: "error",
      description: error.message,
    });
  }
}

async function editar(req, res){
    try {
        const dados = req.body;
        const { id } = req.params;

        if (dados.senha){
          dados.senha = await bcrypt.hash(dados.senha, 10)
        }

        await PRISMA.usuarios.update({
            where: {
                id
            },            
            data: dados            
        });

        res.json({
            type: "success",
            description: "Registro editado com sucesso."
        })

    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

async function deletar(req, res){
    try {
        const { id } = req.params;
        
        await PRISMA.usuarios.delete({
            where: {
                id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro deletado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function login(req, res){
  try {
    const { email, senha } = req.body;

    let usuario = await PRISMA.usuarios.findFirst({
      where: {
        email
      }
    }); //verificando se o e-mail do usuário existe

    if (!usuario){
      res.json({
        type: "warning",
        description: "E-mail ou senha incorretos"
      })
      return;
    }

    let senhaValida = await bcrypt.compare(senha, usuario.senha); //comparando as senhas

    if (!senhaValida){
      res.json({
        type: "warning",
        description: "E-mail ou senha incorretos"
      })
    }

    delete usuario.senha; //pra não aparecer a senha

    let token = await jwt.sign({id: usuario.id}, process.env.SEGREDO, { expiresIn: "1h"})

    res.json({
      type: "success",
      description: "Login realizado com sucesso",
      usuario, 
      token
    })

  } catch (error) {
    res.json({
      type: "error",
      description: error.message
    })
    
  }
}

module.exports = {
  buscar,
  criar,
  editar,
  deletar,
  login
};
