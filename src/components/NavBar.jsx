function NavBar({ pokemonList, changePokemon }) {

  const handleClick = (pokemon) => {
    changePokemon(pokemonList.indexOf(pokemon));

    if (pokemon.name === "pikachu") {
      alert("pika pikachuuu !");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.id} onClick={() => handleClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
