import { useState } from "react"
import PokeList from "./components/PokeList/PokeList"
import PokeParty from "./components/PokeParty/PokeParty"

const dummyParty = [{"name":"umbreon","index":197,"height":10,"weight":270,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png","types":["dark"],"stats":[{"stat":95,"name":"hp"},{"stat":65,"name":"atk"},{"stat":110,"name":"def"},{"stat":60,"name":"s-atk"},{"stat":130,"name":"s-def"},{"stat":65,"name":"spd"}]},{"name":"leafeon","index":470,"height":10,"weight":255,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png","types":["grass"],"stats":[{"stat":65,"name":"hp"},{"stat":110,"name":"atk"},{"stat":130,"name":"def"},{"stat":60,"name":"s-atk"},{"stat":65,"name":"s-def"},{"stat":95,"name":"spd"}]},{"name":"flareon","index":136,"height":9,"weight":250,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png","types":["fire"],"stats":[{"stat":65,"name":"hp"},{"stat":130,"name":"atk"},{"stat":60,"name":"def"},{"stat":95,"name":"s-atk"},{"stat":110,"name":"s-def"},{"stat":65,"name":"spd"}]},{"name":"jolteon","index":135,"height":8,"weight":245,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png","types":["electric"],"stats":[{"stat":65,"name":"hp"},{"stat":65,"name":"atk"},{"stat":60,"name":"def"},{"stat":110,"name":"s-atk"},{"stat":95,"name":"s-def"},{"stat":130,"name":"spd"}]},{"name":"vaporeon","index":134,"height":10,"weight":290,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png","types":["water"],"stats":[{"stat":130,"name":"hp"},{"stat":65,"name":"atk"},{"stat":60,"name":"def"},{"stat":110,"name":"s-atk"},{"stat":95,"name":"s-def"},{"stat":65,"name":"spd"}]},{"name":"eevee","index":133,"height":3,"weight":65,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png","types":["normal"],"stats":[{"stat":55,"name":"hp"},{"stat":55,"name":"atk"},{"stat":50,"name":"def"},{"stat":45,"name":"s-atk"},{"stat":65,"name":"s-def"},{"stat":55,"name":"spd"}]}];

/* const fetchParty = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    
    if(res.ok){
      const data = await res.json();
      
      const promises = data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });

      const results = await Promise.all(promises);

      return castResponseToPokemon(results);
    }

    switch(response.status) {
      case 404:
        console.log("No lo encontré :c");
        break;
      default:
        console.log("No sé que pasó");
    }


  } catch (error) {
    console.log("fallo " + error);
  }

}


const castResponseToPokemon = (_r) => {
  return (
    _r.map(s => {
      return (
        {
          name: s.name,
          index: s.id,
          height: s.height,
          weight: s.weight,
          sprite: s.sprites.front_default,
          types: s.types.map(_t => _t.type.name),
          stats: s.stats.map(_s => {
            return {
              stat: _s.base_stat,
              name: getStatNameFromText(_s.stat.name)
            };
          })
        }
      )
    })
  )
};

const getStatNameFromText = (text) => {
  let stats = {
    "hp": "hp",
    "attack": "atk",
    "defense": "def",
    "special-attack": "s-atk",
    "special-defense": "s-def",
    "speed": "spd"
  };

  return stats[text] || "ns";
}

const dummyParty = await fetchParty();
 */

function App() {

  const [party, setParty] = useState(dummyParty)

  return (
    <>
      {/*pokeparty */}
      <PokeParty list={party}/>

      {/* resultados */}
      <PokeList/>
    </>
  )
}

export default App
