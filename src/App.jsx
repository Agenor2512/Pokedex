import './App.css'
import { useState } from "react";
import PokemonCard from './components/PokemonCard'

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
];

  let [pokemonIndex, setIndex] = useState(0);

  const incrementIndex = () => {
      setIndex(pokemonIndex+1)
  }

  const decrementIndex = () => {
      setIndex(pokemonIndex-1)
  }
  
  return (
    <div>
      <PokemonCard 
      pokemon={pokemonList[pokemonIndex]}
      />
      {
        pokemonIndex > 0 && <button onClick={decrementIndex} style={{marginRight: "0.5rem", marginTop: "1rem", padding: "0.5rem"}}>Previous</button>
      }

      {
        pokemonIndex < pokemonList.length - 1 && <button onClick={incrementIndex} style={{padding: "0.5rem"}}>Next</button>
      }
    </div>
  )
}


export default App
