import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokeModal from "./components/PokeModal";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1154")
      .then((response) => response.json())
      .then(json => {
        setPokemons(json.results)
      })
  }, [])

  const updateSelectedPokemon = (url) => {
    setPokemonSelected(url)
    console.log("url", url)
  }


  return (
    <>
      {pokemonSelected && <PokeModal url={pokemonSelected} onClose={() => setPokemonSelected("")} />}
      <header className="header-logo">
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt="pokeapi-logo"
        />
      </header>
      <main className="pokemon-list">
        {pokemons.map((pokemon, index) => {
          return <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
            onClick={() => updateSelectedPokemon(pokemon.url)}

          />
        })}
      </main>

    </>
  );
}

export default App;
