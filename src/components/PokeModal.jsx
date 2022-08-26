import { useEffect, useState } from "react"


function PokeModal(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(props.url)
            .then((response) => response.json())
            .then((json) => {
                setPokemon(json)
            })
    }, [props.url])
    return (
        <section className="pokemodal" onClick={props.onClose}>
            <main onClick={(event) => event.stopPropagation()}>
                <header>
                    <img
                        src={pokemon?.sprites?.front_default} alt="pokemon" />
                </header>
                <h2>
                    {pokemon.name}<span> # {pokemon.id}</span>{""}
                </h2>
                <h3>{pokemon.types?.map((type) => type?.type?.name)?.join(", ")}</h3>
                <h3>{pokemon.height} Pokeunidades</h3>
                <h3>{pokemon.weight} Pokekilos</h3>
            </main>
        </section>
    )
}

export default PokeModal