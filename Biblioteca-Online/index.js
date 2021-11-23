const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const livros = [
  {
    id: 1,
    titulo: "A Odisséia de Jonas",
    autor: "Thomas Crawling",
    ano: 2001,
    numPaginas: 197
  },
  {
    id: 2,
    titulo: "Jonas e a sociedade escondida",
    autor: "Claire Crawling",
    ano: 2004,
    numPaginas: 158
  }
];

app.get("/livros", (req, res) => {
  res.json(livros);
  return;
});

app.get("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const existe = livros.find(identify => identify.id === id);

  if (!id) {
    res.json("O valor do parâmetro ID da URL não é um número válido.");
    return;
  }

  if (!existe) {
    res.json("Não existe livro para o ID informado.")
    return;
  }

  res.json(existe);
  return;
});




app.listen(8001);