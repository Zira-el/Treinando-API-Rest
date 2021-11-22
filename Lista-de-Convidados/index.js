const express = require("express");

const app = express();

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
  if(req.query.nome){
    const {nome} = req.query;
    const achei = convidados.find(pessoa => pessoa.toLowerCase() === nome.toLowerCase());
    
    if(achei){
      res.json("Convidado presente.");
      return;
    }

    res.json("O convidado buscado não está presente na lista.");
    return;
  }

  res.json(convidados);
})

app.listen(8001);

