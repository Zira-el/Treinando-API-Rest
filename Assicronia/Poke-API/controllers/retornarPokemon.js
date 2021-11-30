const axios = require("axios");

async function retornarListaDePokemons(req, res) {
  const { inicio, quantidade } = req.query;

  if (!Number(inicio) && inicio != '0' || !Number(quantidade) & quantidade != 0) {
    return res.status(400).json("Os valores de 'inicio' e 'quantidade' devem ser números.");
  }

  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);
  res.json(pokemons.data.results);
}

async function retornarUmPokemon(req, res) {

}

module.exports = {
  retornarListaDePokemons,
  retornarUmPokemon,
}