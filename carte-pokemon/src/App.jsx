import "./App.css";
import StyledComponent from "./components/styledComponent";

// class Pokemon {
//   constructor(name, lifePoints, pokeImg, description, attackOne, strengthOne, attackTwo, strengthTwo)
//   this.name = name,
//   this.lifePoints = lifePoints,
//   this.pokeImg = pokeImg,
//   this.description = description,
//   this.attackOne = attackOne,
//   this.strengthOne = strengthOne,
//   this.attackTwo = attackTwo,
//   this.strengthTwo = strengthTwo, 
// }

// const Pokedex = {
//   new Pokemon = {"Salamèche", "50 PV", "src/assets/salameche.jpg", "Pokémon Lézard. Taille: 0.6 m, poids: 8.5 kg", "Griffe", 10, "Flammèche", 30 }
// }

const pokemonTab = [
  {
    name: "Salamèche",
    lifePoints: "50 PV",
    pokeImg: "src/assets/salameche.jpg",
    description: "Pokémon Lézard. Taille: 0.6 m, poids: 8.5 kg",
    attackOne: "Griffe",
    strengthOne: 10,
    attackTwo: "Flammèche",
    strengthTwo: 30,
  },
];

function App() {
  return (
    <>
    
    {pokemonTab.map((poke, index) => (
        <StyledComponent
          key={index}
          name={poke.name}
          likePoints={poke.lifePoints}
          pokeImg={poke.pokeImg}
          description={poke.description}
          attackOne={poke.attackOne}
          strengthOne={poke.strengthOne}
          attackTwo={poke.attackTwo}
          strengthTwo={poke.strengthTwo}
        />
      ))}
    </>
  );
}

export default App;
