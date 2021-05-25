const express = require("express");
const pokemonRouting = express();
const pokemon = require("../pokemonData.json");
pokemonRouting.use(express.urlencoded({ extended: false }))


pokemonRouting.get('/', (req, res) => {
    res.send(pokemon)
})

pokemonRouting.get('/:id', (req, res) => {
    let pokeId = Number(req.params.id)
        let singlePokemon = pokemon.find((e, index) => e.id === pokeId)
        if(singlePokemon) res.send(singlePokemon)
        else res.send('No Pokemon Found :/')
})

pokemonRouting.get('/:id/:info', (req, res) => {
    let pokeId = Number(req.params.id)
    let {info} = req.params
        let singlePokemon = pokemon.find((e, index) => e.id === pokeId)
        if(singlePokemon && info=='name') res.send(singlePokemon.name)
        else if(singlePokemon && info=='base') res.send(singlePokemon.base)
        else if(singlePokemon && info=='type') res.send(singlePokemon.type)
        else res.send('Nothing found :/')
})


module.exports = pokemonRouting;