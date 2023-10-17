import "./App.css";
import StyledComponent from "./components/styledComponent";
import { useState } from "react";

class Pokemon {
  constructor(
    name,
    lifePoints,
    pokeImg,
    description,
    attackOne,
    strengthOne,
    attackTwo,
    strengthTwo
  ) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.pokeImg = pokeImg;
    this.description = description;
    this.attackOne = attackOne;
    this.strengthOne = strengthOne;
    this.attackTwo = attackTwo;
    this.strengthTwo = strengthTwo;
  }
}

const Pokedex = [
  new Pokemon(
    "Salamèche",
    "50 PV",
    "src/assets/salameche.jpg",
    "Pokémon Lézard. Taille: 0.6 m, poids: 8.5 kg",
    "Griffe",
    10,
    "Flammèche",
    30
  ),
  new Pokemon(
    "Reptincel",
    "80 PV",
    "src/assets/reptincel.png",
    "Pokémon Flamme. Taille: 1.1 m, poids: 19 kg",
    "Tranche",
    30,
    "Lance-Flamme",
    50
  ),
  new Pokemon(
    "Dracaufeu",
    "150 PV",
    "src/assets/dracaufeu.png",
    "Pokémon Flamme. Taille: 1.7 m, poids: 90.5 kg",
    "Talent : Dépense d'Énergie",
    null,
    "Danse Flamme",
    200
  ),
];
console.log(Pokedex);
console.log(Pokemon);

//-------------------------------------------------------------------------------------

// const Pokedex = [
//   {
//     name: "Salamèche",
//     lifePoints: "50 PV",
//     pokeImg: "src/assets/salameche.jpg",
//     description: "Pokémon Lézard. Taille: 0.6 m, poids: 8.5 kg",
//     attackOne: "Griffe",
//     strengthOne: 10,
//     attackTwo: "Flammèche",
//     strengthTwo: 30,
//   },
//   {
//     name: "Reptincel",
//     lifePoints: "80 PV",
//     pokeImg: "src/assets/reptincel.png",
//     description: "Pokémon Flamme. Taille: 1.1 m, poids: 19 kg",
//     attackOne: "Tranche",
//     strengthOne: 30,
//     attackTwo: "Lance-Flamme",
//     strengthTwo: 50,
//   },
//   {
//     name: "Dracaufeu",
//     lifePoints: "150 PV",
//     pokeImg: "src/assets/dracaufeu.png",
//     description: "Pokémon Flamme. Taille: 1.7 m, poids: 90.5 kg",
//     attackOne: "Talent : Dépense d'Énergie",
//     strengthOne: null,
//     attackTwo: "Danse Flamme",
//     strengthTwo: 200,
//   },
// ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = Pokedex[pokemonIndex];

  const handleClick = () => {
    setPokemonIndex((nextIndex) => (nextIndex + 1) % Pokedex.length);
  };

  return (
    <>
      <StyledComponent
        name={pokemon.name}
        lifePoints={pokemon.lifePoints}
        pokeImg={pokemon.pokeImg}
        description={pokemon.description}
        attackOne={pokemon.attackOne}
        strengthOne={pokemon.strengthOne}
        attackTwo={pokemon.attackTwo}
        strengthTwo={pokemon.strengthTwo}
      />

      {/* //   {pokemon.map((poke, index) => (
    //     <StyledComponent
    //       key={index}
    //       name={poke.name}
    //       likePoints={poke.lifePoints}
    //       pokeImg={poke.pokeImg}
    //       description={poke.description}
    //       attackOne={poke.attackOne}
    //       strengthOne={poke.strengthOne}
    //       attackTwo={poke.attackTwo}
    //       strengthTwo={poke.strengthTwo}
    //     /> */}

      <button className="evolButton" onClick={handleClick}>
        Next stage
      </button>
    </>
  );
}

export default App;
