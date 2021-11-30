const axios = require("axios");

async function retornarListaDePokemons(req, res) {
  const { inicio, quantidade } = req.query;
  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);
  res.json(pokemons.data.results);
}

async function retornarUmPokemon(req, res) {

}

module.exports = {
  retornarListaDePokemons,
  retornarUmPokemon,
}