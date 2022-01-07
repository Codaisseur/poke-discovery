import { useEffect, useState } from "react";
import axios from "axios";

import PokemonBlock from "../Components/PokemonBlock";

function PokemonDiscoveryPage() {
  const [pokeList, setPokeList] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokeList(pokeResponse.data.results);
    }
    getPokemons();
  }, []);
  return (
    <div>
      {pokeList ? (
        pokeList.map((pokeObj) => <PokemonBlock name={pokeObj.name} />)
      ) : (
        <p>Loading ..</p>
      )}
    </div>
  );
}

export default PokemonDiscoveryPage;
