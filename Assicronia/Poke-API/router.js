const express = require("express");
const pokemons = require("./controllers/retornarPokemon");

const router = express();

router.get("/pokemon", pokemons.retornarListaDePokemons);
router.get("/pokemon/:idOuNome", pokemons.retornarUmPokemon);

module.exports = router;