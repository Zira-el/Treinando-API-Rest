const imoveis = require("../data/imoveis");

function retornarImoveis(req, res) {
  return res.status(200).json(imoveis);
}

function retornarUmImovel(req, res) {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json("Parâmetro ID incorreto.");
  }

  const existeImovel = imoveis.find(imovel => imovel.id === id);

  if (!existeImovel) {
    return res.status(404).json("Imovel não encontrado");
  }

  return res.status(200).json(existeImovel);
}

module.exports = {
  retornarImoveis,
  retornarUmImovel,
}