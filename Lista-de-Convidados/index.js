const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
  if(req.query.nome){
    const {nome} = req.query;
    const existe = convidados.find(pessoa => pessoa.toLowerCase() === nome.toLowerCase());
    
    if(existe){
      res.json("Convidado presente.");
      return;
    }

    res.json("O convidado buscado não está presente na lista.");
    return;
  }

  res.json(convidados);
});

app.post("/convidados", (req, res) => {
  const {nome} = req.body;
  const existe = convidados.find(pessoa => pessoa.toLowerCase() === nome.toLowerCase());

  if(existe){
    res.json("O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.")
    return
  }

  convidados.push(nome);
  res.json("Convidado adicionado com sucesso");
  return;
});

app.listen(8001);

