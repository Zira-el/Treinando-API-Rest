const express = require("express");
const imoveis = require("./controllers/imoveis");

const roteador = express();

roteador.get("/imoveis", imoveis.retornarImoveis);
roteador.get("/imoveis/:id", imoveis.retornarUmImovel);

module.exports = roteador;