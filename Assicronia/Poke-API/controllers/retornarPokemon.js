const axios = require("axios");

async function retornarListaDePokemons(req, res) {
  const { inicio, quantidade } = req.query;

  if (!Number(inicio) && inicio != '0' || !Number(quantidade) && quantidade != 0) {
    return res.status(400).json("Os valores de 'inicio' e 'quantidade' devem ser números.");
  }

  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);
  res.json(pokemons.data.results);
}

async function retornarUmPokemon(req, res) {
  const { idOuNome } = req.params

  try {
    const dados = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}/`);
    const { id, name, height, weight, base_experience, forms, abilities, species } = dados.data;
    const pokemon = {
      id: id,
      nome: name,
      altura: height,
      peso: weight,
      experiencia_base: base_experience,
      formas: forms,
      habilidades: abilities,
      especie: species
    }

    res.json(pokemon);

  } catch (error) {
    res.status(500).json(error.message);
  }

}

module.exports = {
  retornarListaDePokemons,
  retornarUmPokemon,
}