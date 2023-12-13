function NavBar({pokemonList, changePokemon}) {
    
  

    return (
        <div>
            {
                pokemonList
                .map((pokemon) => (
                    <button key={pokemon.id} onClick={() => changePokemon(pokemonList.indexOf(pokemon))}>{pokemon.name}</button>
                ))
            }
        </div>
    )
}

export default NavBar